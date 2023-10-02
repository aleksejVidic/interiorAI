import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { AntDesign } from '@expo/vector-icons';
export default function FAQ() {

    const [selectedQuestion, setSelectedQuestion] = useState("");
    const questions = [
        {
            question: "How does premium plan help me?",
            answer: "With premium plan you can unlock all styles and have unlimited amount of trials!"
        },
        {
            question: "How can I cancel my subscription?",
            answer: "You can cancel your subscription plan using restore button!"
        },
        {
            question: "How do app subscription work?",
            answer: "App subscriptions are recurring payments a user initiates in exchange for access to content, premium features, or services!"
        },
        {
            question: "Is there one-time payment or automatic renewal?",
            answer: "No, there is no one-time payment or automatic renewal!"
        },
    ]
  return (
    <View style={styles.container}>
      <Text style={styles.faqTitle}>
        Frequently Asked Questions
      </Text>
      {questions.map(q => (
        <TouchableOpacity
            onPress={() => {
                if(selectedQuestion === q.question) {
                    setSelectedQuestion("")
                    return;
                }
                setSelectedQuestion(q.question)
            }}
            style={[styles.answerBtn, { borderBottomWidth: selectedQuestion === q.question ? 0 : 1}]}
            key={q.question}
        >
            <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <AntDesign name="right" size={24} color="white" style={{
                    transform: [{rotate: selectedQuestion === q.question ? "90deg" : "0deg"}]
                }} />
                <Text style={styles.faqQuestion}>
                    {q.question}
                </Text>
            </View>
            {
                selectedQuestion === q.question && <Text style={styles.faqAnswer}>
                {q.answer}
            </Text>
            }
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = ScaledSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        paddingTop: "20@vs",
    },
    faqTitle: {
        fontSize: "24@ms",
        fontWeight: "bold",
        color: "white",
        marginBottom: "20@vs"
    },
    answerBtn: {
        width: "90%",
        borderBottomColor: "#c5d8da",
    },
    faqQuestion: {
        fontSize: "16@ms",
        color: "white",
        marginVertical: "10@vs"
    },
    faqAnswer: {
        width: "100%",
        backgroundColor: "#c5d8da",
        paddingVertical: "5@vs",
        paddingHorizontal: "10@s",
        borderRadius: "5@ms"
    }
})