import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useDidMountEffect from '../Hooks/customUseRef';

const dummyAnswer = [
  {
    id: 0,
    value: "Option0",
  },
  {
    id: 1,
    value: "Option1",
  },
  {
    id: 2,
    value: "Option2",
  },
  {
    id: 3,
    value: "Option3",
  },
];
const newQuestion = "New Question ?";

const DiagnonsisScreen = () => {
  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(false);
  const [skip, setSkip] = useState(false);
  const [continues, setContinues] = useState(false);

  const [list, setList] = useState();
  const [question, setQuestion] = useState("What is the symptoms");
  const [answer, setAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [text, setText] = useState('');


  useDidMountEffect(() => {
    //<ResultScreen />
    <></>
  }, [stop, setStop]);

  useDidMountEffect(()=>{
    setSelectedAnswer([])
    setAnswer(answer);
    setQuestion(newQuestion);  
  }, [skip, setSkip]);

  useDidMountEffect(()=>{

    // send the selected answers to ML algo
    // ....
    setSelectedAnswer([])
    setQuestion(newQuestion);
    setAnswer(selectedAnswer);


    // get old answers to display from api 
    setAnswer(dummyAnswer);
    
  }, [continues, setContinues]);

  useDidMountEffect(()=>{
    const list2 = text.split(',');
    setList(list2);
  }, [continues, setContinues])
  
  const addItemToAnswer = (newItem)=>{
    const newList = [...selectedAnswer, newItem];
    setSelectedAnswer(newList);
    console.log(selectedAnswer);
  };

  
  useEffect(()=>{
    if(count==2){
      console.log(list);
    }

    // api to send the data
  }, [count]);

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  },[]);


  return (
    <SafeAreaView>
      <View>
        <Text>{count}</Text>
        <Text>{question}</Text>
        {count == 1 ? <TextInput
          style={styles.input}
          onChangeText={(text) => {setText(text)}}
          value={text}
        />: <></>}
        
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: selectedAnswer === "Stop" ? "#00ff00" : "#fff",
              padding: 10,
              margin: 5,
              borderRadius: 5,
            }}
            onPress={() => setStop(true)}
          >
            <Text>Stop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: selectedAnswer === "Skip" ? "#00ff00" : "#fff",
              padding: 10,
              margin: 5,
              borderRadius: 5,
            }}
            onPress={() => setSkip(true)}
          >
            <Text>Skip</Text>
          </TouchableOpacity>
          
            {answer === null ? (
              text === null ? <></> :
              <TouchableOpacity
              style={{
              backgroundColor: selectedAnswer === "Continue" ? "#00ff00" : "#fff",
              padding: 10,
              margin: 5,
              borderRadius: 5,
            }}
            onPress={() => setContinues(true)}
          />
            ) : (
              <>
              <View>
                  <FlatList
                    data={answer}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                          style={{
                            backgroundColor: selectedAnswer === "Continue" ? "#00ff00" : "#fff",
                          }}
                          onPress={() => addItemToAnswer(item.id)}>
                          <Text>{item.value}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                  />
              </View>
              <TouchableOpacity
                style={{
                backgroundColor: selectedAnswer === "Continue" ? "#00ff00" : "#fff",
                padding: 10,
                margin: 5,
                borderRadius: 5,
              }}
              onPress={() => setContinues(true)}
              >
              <Text>Continue</Text>
              </TouchableOpacity>
              </>
            )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default DiagnonsisScreen;



