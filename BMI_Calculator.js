import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import Constants from 'expo-constants';


export default function App() {

    const [heigh, setheigh] = useState(0);
    const [weigh, setweigh] = useState(0);
    const [bmi, setbmi] = useState(" ");
    const [conclusion, setConclusion] = useState("");
    const [heightUnit, setheightUnit] = useState("cm");
    const [weightUnit, setweightUnit] = useState("Kg");

    //logic for calculation of the bmi
    function calc_bmi(lbs, ins) {
        let h2 = (ins) * (ins);
        let bmi = (lbs) / h2 * 703
        let f_bmi = Math.floor(bmi);
        let diff = bmi - f_bmi;
        diff = diff * 10;
        diff = Math.round(diff);
        if (diff == 10) {
            f_bmi += 1;
            diff = 0;
        }
        bmi = f_bmi + "." + diff;
        return bmi;


    }

    //logic for the message after the bmi is calculated
    function Message(bmi) {

        if (bmi < 18.5) {
            setConclusion("You are underweight");
        }
        else if (bmi >= 18.5 && bmi <= 25) {
            setConclusion("You are at healthy range");
        }
        else {
            setConclusion("You are overweight");
        }
        return conclusion;
    }
    function reload() {
        window.location.reload();

    }
    //changes measurments to lbs and inchs for the formula wwe used is ((lbs)/(inchs)^2) * 703
    function changesMesure(wei, weiType, hei, heiType) {
        var weCh = wei;
        var heCh = hei;
        if (isNaN(weCh) || weCh <= 0) {

            alert("Enter Valid Value For -> Weight");
            return "Not Valid Input"
        }
        else if (isNaN(heCh) || heCh <= 0) {

            alert("Enter Valid Value For -> Height");
            return "Not Valid Input"
        }
        else {
            if (weiType == "Kg") {
                weCh = wei * 2.20462;
            }
            if (heiType == "Feet.Inch") {
                heCh = (parseInt(hei) * 12) + ((hei - parseInt(hei)) * 10);
            }
            if (heiType == "cm") {
                heCh = hei / 2.54;
            }
            return calc_bmi(weCh, heCh);
        }
    }


    return (
        <View style={styles.container}>

            <Text style={styles.title}>BMI Calculator</Text>

            <View style={[{ maxHeight: 500, width: "100%" }]}>
                <Text style={styles.text}>Height</Text>

                <View style={[styles.inpV, { flexDirection: "row" }]}>
                    <TextInput
                        style={[styles.inpo, { flex: 1 }]}
                        placeholder={heightUnit}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            setheigh(parseFloat(text));
                        }}>
                    </TextInput>
                    <Picker style={[styles.selector, { width: 50 }]} selectedValue={heightUnit}
                        onValueChange={(itemValue, itemIndex) => setheightUnit(itemValue)}>
                        <Picker.Item label="cm" value="cm" />
                        <Picker.Item label="Feet.Inch" value="Feet.Inch" />
                    </Picker>
                </View>
                <Text style={styles.text}>Weight</Text>
                <View style={[styles.inpV, { flexDirection: "row" }]}>
                    <TextInput
                        keyboardType="numeric"
                        style={[styles.inpo, { flex: 1 }]}
                        placeholder={weightUnit}
                        onChangeText={(text) => {
                            setweigh(parseFloat(text));
                        }}
                    ></TextInput>
                    <Picker style={[styles.selector, { width: 50 }]} selectedValue={weightUnit}
                        onValueChange={(itemVale, itemIndx) => setweightUnit(itemVale)}>
                        <Picker.Item label="Kg" value="Kg" />
                        <Picker.Item label="Lbs" value="Lbs" />
                    </Picker>
                </View>

            </View>
            <View style={[{ width: "100%", flexDirection: "row", alignContent: "center", justifyContent: "center" }]}>
                <TouchableOpacity
                    style={[styles.submi, styles.shadow]}
                    onPress={() => {
                        setbmi("BMI = " + changesMesure(weigh, weightUnit, heigh, heightUnit) + Message(changesMesure(weigh, weightUnit, heigh, heightUnit)));
                    }}
                    title="Submit"
                ><Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.submi, styles.shadow]}
                    onPress={() => {
                        reload()
                    }}
                    title="Reload"
                ><Text style={styles.text}>reload</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text2}>{bmi}</Text>
            <Text style={styles.text2}>{conclusion}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },


    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 10,

    },
    submi: {
        borderRadius: 50,
        backgroundColor: "#BDFFF3",
        padding: 2,
        borderWidth: 2,
        width: 100,
        textAlignment: "center",
        textAlign: "center",
        gravity: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    inpV: {
        borderBottomWidth: 2,
        borderColor: "#999",
        marginHorizontal: 15,
        marginBottom: 25,
        paddingHorizontal: 8
    },
    inpo: {
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        top: 0,
        marginVertical: 20,
        textAlign: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        lineHeight: 35,
    },
    text2: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 15,
        lineHeight: 35,
    },
});
