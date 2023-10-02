import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {ScaledSheet} from "react-native-size-matters";
import { pdfs } from '../components/PdfDocsList';
import { fonts } from '../components/Fonts';
import { Ionicons } from '@expo/vector-icons';
export default function PdfDoc({route, navigation}) {

  const pdfDoc = route.params.docID
  const [pdf, setPdf] = useState({
    title: "",
    desc: ""
  });

  useEffect(() => {
    if(pdfs[pdfDoc]) {
      setPdf({...pdfs[pdfDoc]});
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="chevron-back-sharp" size={30} color="white" />
          </Pressable>
        </View>
        <ScrollView style={{
          flexGrow: 1
        }}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={[styles.title, fonts.bold700]}>{pdf.title}</Text>
          <Text style={[styles.txt, fonts.regular400]}>{pdf.desc}</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: "10@s",
    paddingVertical: "15@vs",
  },
  title: {
    textAlign: "center",
    fontSize: "24@ms",
  },
  content: {
    alignItems: "center",
    paddingVertical: StatusBar.currentHeight
  },
  backBtn: {
    backgroundColor: "black",
    borderRadius: "50@ms",
    paddingVertical: "10@vs",
    justifyContent: "center",
    alignItems: "center",
    width: "15%"
  },
  txt: {
    fontSize: "14@ms",
    marginTop: "15@vs",
    maxWidth: "90%",
    textAlign: "justify"
  }
})