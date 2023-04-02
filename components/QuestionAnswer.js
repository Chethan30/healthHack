import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const QuestionAnswer = ({question, answer}) => {
  return (
    <SafeAreaView style={styles.title}>
      <Text>{question}</Text>
      <AnswerButtons answer={answer} />
    </SafeAreaView>   
  );
};


const AnswerButtons = ({ answer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  const handleSelect = (answer) => {
    setSelectedAnswer(answer);
    answer(answer);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <TouchableOpacity
        style={{
          backgroundColor: selectedAnswer === 'Stop' ? '#00ff00' : '#fff',
          padding: 10,
          margin: 5,
          borderRadius: 5,
        }}
        onPress={() => handleSelect(1)}
      >
        <Text>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: selectedAnswer === 'Skip' ? '#00ff00' : '#fff',
          padding: 10,
          margin: 5,
          borderRadius: 5,
        }}
        onPress={() => handleSelect(0)}
      >
        <Text>Skip</Text>
      </TouchableOpacity>

      <View>
        
      </View>

    </View>
   
  );
};

export default QuestionAnswer;

const styles = StyleSheet.create({
  title: {
   
  },
  
});
