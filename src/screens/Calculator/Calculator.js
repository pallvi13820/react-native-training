import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const calculate = function (s) {
  let stack = [];
  let num = "";
  let sign = null;

  for (let i = 0; i <= s.length; i++) {
    const curr = s[i];

    if (curr === " ") continue;

    if (!isNaN(curr)) num += curr;

    if (isNaN(curr)) {
      num = Number(num);

      switch (sign) {
        case "+":
        case null:
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(parseInt(stack.pop() / num, 10));
          break;
      }

      sign = curr;
      num = "";
    }
  }

  return stack.reduce((a, b) => {
    return a + b;
  }, 0);
};

const Calculator = () => {
  const [op, setOperator] = useState(0);
  const [data, setData] = useState("0");
  const scrollViewRef = useRef(null);

  const handlePress = (text) => {
    if (text >= 0 && text <= 9) {
      if (text == "0") {
        if (data != "0") {
          setData(data + text);
        } else {
          setData(text);
        }
      } else {
        if (data == "0") {
          setData(text);
        } else setData(data + text);
      }
    } else if (text === "AC") {
      setData("0");
      setOperator(0);
    } else if (text == "D") {
      let val = Math.floor(Number(data) / 10);
      if (val == 0 || val == "0") {
        setData("0");
      } else setData(val);
    } else if (text == "*" || text == "/" || text == "-" || text == "+") {
      if (data == "0") {
        return;
      } else if (data != "0") {
        if (
          op > 0 &&
          data != undefined &&
          (data.charAt(data.length - 1) == "*" ||
            data.charAt(data.length - 1) == "/" ||
            data.charAt(data.length - 1) == "-" ||
            data.charAt(data.length - 1) == "+")
        ) {
          setData(data.substring(0, data.length - 1) + text);
          return;
        }

        setData(data + text);
        setOperator(op + 1);
      }
    } else if (text === "=") {
      setData(calculate(data));
      setOperator(0);
    } else if (text == "%" && op == 0 && data != "0") {
      setData(Number(data) / 100);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView ref={scrollViewRef} style={styles.calculationContainer}>
        <Text style={styles.calculatedText}>{data}</Text>
      </ScrollView>
      <View style={styles.keyContainer}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress("AC")} style={styles.button}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("D")} style={styles.button}>
            <Text style={styles.buttonText}>D</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("%")} style={styles.button}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("/")} style={styles.buttonOperator}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress("7")} style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("8")} style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("9")} style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("*")} style={styles.buttonOperator}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress("4")} style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("5")} style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("6")} style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("-")} style={styles.buttonOperator}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress("1")} style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("2")} style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("3")} style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("+")} style={styles.buttonOperator}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress("0")} style={styles.doubleButton}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(".")} style={styles.button}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("=")} style={styles.buttonOperator}>
          <Text style={styles.appButtonText}>=</Text>
       </TouchableOpacity>
       </View>
       </View>
       </View>
       )
       }
        const styles = StyleSheet.create({
          mainContainer: {
            flex: 1,
          },
          calculatedText: {
            fontSize: 60,
            textAlign: "right",
            marginVertical : -10
          },
          calculationContainer: {
            
            padding: 20,
            borderWidth: 1,
            flexDirection: "column-reverse",
            paddingHorizontal: 20,
            marginHorizontal: 10,
            borderRadius: 20,
            borderColor: "black",
          },
          keyContainer: {
           
            flexDirection: "column",
            justifyContent: "flex-end",
            backgroundColor: "#F2F2F2",
          },
          row: {
            flexDirection: "row",
            justifyContent: "space-between",
          },
          button: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E0E0E0",
            paddingVertical: 20,
          },
          buttonText: {
            fontSize: 30,
            fontWeight: "bold",
            color: "#333",
          },
          buttonOperator: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FF9500",
            paddingVertical: 20,
          },
          doubleButton: {
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E0E0E0",
            paddingVertical: 20,
          },
          appButtonText: {
            fontSize: 30,
            fontWeight: "bold",
            color: "#333",
          }
        });
        
        export default Calculator;
        