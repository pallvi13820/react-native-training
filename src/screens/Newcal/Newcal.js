// Newcal.js
import React from 'react';
import { connect } from 'react-redux';
// import {
//   updateInput,
//   clearInput,
//   deleteLastInput,
//   calculateResult,
// } from "./calculatoraction";
import {
  updateInput,
  clearInput,
  deleteLastInput,
  calculateResult,
} from '@/actions/calculatoraction';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Newcal = ({
  data,
  operatorCount,
  updateInput,
  clearInput,
  deleteLastInput,
  calculateResult,
}) => {
  const handlePress = text => {
    if (text >= 0 && text <= 9) {
      if (text === 0) {
        if (data !== '0') {
          updateInput(data + text);
        } else {
          updateInput(text.toString());
        }
      } else {
        if (data === '0') {
          updateInput(text.toString());
        } else {
          updateInput(data + text);
        }
      }
    } else if (text === 'AC') {
      clearInput();
    } else if (text === 'D') {
      deleteLastInput();
    } else if (text === '*' || text === '/' || text === '-' || text === '+') {
      if (data === '0') {
        return;
      } else if (
        operatorCount > 0 &&
        data !== undefined &&
        (data.charAt(data.length - 1) === '*' ||
          data.charAt(data.length - 1) === '/' ||
          data.charAt(data.length - 1) === '-' ||
          data.charAt(data.length - 1) === '+')
      ) {
        updateInput(data.substring(0, data.length - 1) + text);
        return;
      }

      updateInput(data + text);
    } else if (text === '=') {
      calculateResult();
    } else if (text === '%' && operatorCount === 0 && data !== '0') {
      updateInput((Number(data) / 100).toString());
    }
  };
console.log('data', data)
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.calculationContainer}>
        <Text style={styles.calculatedText}>{data}</Text>
      </ScrollView>
      <View style={styles.keyContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handlePress('AC')}
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
            onPress={() => handlePress('7')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('8')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('9')}
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
            onPress={() => handlePress('4')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('5')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('6')}
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
            onPress={() => handlePress('1')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('2')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('3')}
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
            onPress={() => handlePress('0')}
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

const mapStateToProps = state => ({
  data: state.data,
  operatorCount: state.operatorCount,
});

const mapDispatchToProps = {
  updateInput,
  clearInput,
  deleteLastInput,
  calculateResult,
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  calculatedText: {
    fontSize: 60,
    textAlign: 'right',
    marginVertical: 40,
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

export default connect(mapStateToProps, mapDispatchToProps)(Newcal);
