// Newcal.js
import React from 'react';
import {
  clearInput,
  clearLeft,
  clearRight,
  setLeftOperand,
  setRightOperand,
} from '@/actions/calculatoraction';
import { useSelector, useDispatch } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useState } from 'react';

const Newcal = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state?.calculatorreducer);
  console.warn(state);
  const [op, setOp] = useState(false);
  const handlePress = text => {
    console.log('from handlepress', text);
    if (text >= 0 && text <= 9) {
      if (op == false) {

        dispatch(setLeftOperand(Number(text)));
      } else {
        dispatch(setRightOperand(Number(text)));
      }
    } else if (text == '*' || text == '+' || text == '-' || text == '/') {
      setOp(true);
      dispatch(setOp(text));
    } else if (text === '=') {
      setOp(false);
      dispatch(calculate());
    } else if (text == 'AC') {
      setOp(false);
      dispatch(clearInput());
    } else if (text == 'D') {
      if (op == false) dispatch(clearLeft());
      else dispatch(clearRight());
    }
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.calculationContainer}>
        {/* <Text style={styles.calculatedText}>answer</Text> */}
        <Text style={styles.calculatedText}>{state.answer}</Text>
        {/* <Text style={styles.calculatedText}>Left</Text>
        <Text style={styles.calculatedText}>{state.leftoperand}</Text>
        <Text style={styles.calculatedText}>Right</Text>
        <Text style={styles.calculatedText}>{state.rightoperand}</Text>
        <Text style={styles.calculatedText}>operator</Text>
        <Text style={styles.calculatedText}>{state.operator}</Text> */}
      </ScrollView>
      <View style={styles.keyContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              console.log('hello');
              handlePress('AC');
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('D')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>D</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('%')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('/')}
            style={styles.buttonOperator}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handlePress(7)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress(8)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress(9)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('*')}
            style={styles.buttonOperator}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handlePress(4)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress(5)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress(6)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('-')}
            style={styles.buttonOperator}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handlePress(1)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress(2)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress(3)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('+')}
            style={styles.buttonOperator}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handlePress(0)}
            style={styles.doubleButton}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('.')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('=')}
            style={styles.buttonOperator}
          >
            <Text style={styles.appButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  calculatedText: {
    fontSize: 20,
    textAlign: 'right',
    marginVertical: 5,
  },
  calculationContainer: {
    padding: 20,
    borderWidth: 1,
    flexDirection: 'column-reverse',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    borderColor: 'black',
  },
  keyContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#F2F2F2',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonOperator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9500',
    paddingVertical: 20,
  },
  doubleButton: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    paddingVertical: 20,
  },
  appButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Newcal;
