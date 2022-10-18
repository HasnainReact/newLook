import react from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const PrimaryColor = {}
const PrimaryFont = {}
const smallText = {}


const styles=StyleSheet.create({
    mainFull:{
      //   flex:1,
      //   backgroundColor:'black'
    },
    header:{
        height:Dimensions.get('window').height*0.12,
        width:"100%",
        flexDirection:'row',
        backgroundColor:"#8BD2ED",
        justifyContent:'space-around',
    },
    txtInput:{
        height:"90%",
        width:"80%",
        borderRadius:25,
        shadowColor:'black',
        shadowOpacity:0.5,
        paddingLeft:20,
      //   backgroundColor:'red',
        color:'black',
        
    },
    inputView:{
        height:"75%",
        width:"90%",
        backgroundColor:'#8BD2ED',
        borderWidth:1,
        borderColor:'white',
        borderRadius:25,
        elevation:5,
        shadowColor:'black',
        shadowOpacity:0.5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
    },
    headerInputV:{
      height:"75%",
      width:"90%",
      backgroundColor:'white',
      borderWidth:1,
      borderColor:'white',
      borderRadius:25,
      elevation:5,
      shadowColor:'black',
      shadowOpacity:0.5,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:10,
    },
    listView:{
        // backgroundColor:'pink',
        padding:15,
    },
    studentContainer: { 
        height:Dimensions.get('window').height*1,
        width:Dimensions.get('window').width,
        flexDirection: "row",
        justifyContent:'center',
      //   backgroundColor:'grey',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'grey',

        
     },
     contactImage: { 
        height:Dimensions.get('window').height*0.12,
        width:Dimensions.get('window').width*.2, 
        borderRadius: 150 / 2, 
        justifyContent: "center", 
        alignItems: "center", 
        // backgroundColor:'pink',
        
     },
     courseView: { 
      //   height:Dimensions.get('window').height*0.1,
      //   width:Dimensions.get('window').width*.17, 
        borderRadius: 150 / 2, 
        justifyContent: "center", 
        alignItems: "center", 
      //   backgroundColor:'yellow',
        
     },
     batchView: { 
        height:Dimensions.get('window').height*0.1,
        width:Dimensions.get('window').width*.17, 
        borderRadius: 150 / 2, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor:'orange',
        
     },
     TxtBox:{
        height:Dimensions.get('window').height*.18,
        width:Dimensions.get('window').width, 
        // backgroundColor:"pink",
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'grey',
        alignItems:'center',
        
    },
    nameView:{
        height:Dimensions.get('window').height*0.06,
        width:Dimensions.get('window').width*.7, 
        // backgroundColor:"blue",
        alignItems:'center',
        justifyContent:'center',

    },
    tagView:{
        flexDirection:'row',
        alignContent:'center',
        // backgroundColor:'pink',
    },
    BachTag:{
        height:Dimensions.get('window').height*0.05,
        width:Dimensions.get('window').width*0.3, 
        backgroundColor:"#8BD2ED",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    },
    statusTag:{
        height:Dimensions.get('window').height*0.05,
        width:Dimensions.get('window').width*0.3, 
        backgroundColor:"#8BD2ED",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    },
    courseTag:{
        height:Dimensions.get('window').height*0.05,
        width:Dimensions.get('window').width*0.6, 
        backgroundColor:"#13C4A1",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginTop:5,
        marginBottom:12,
    },
    contactName:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
     },
    
     buttonArea: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        position:'absolute',
        bottom:140,
        right:45,
        // backgroundColor:'white',
    
      },
      batch:{
        fontSize:17,
        color:'black',
        marginLeft:5,
        marginTop:5,
      //   fontWeight:'bold',

      },
      statusTxt:{
        fontSize:17,
        color:'black',
      },
      courseTxt:{
        fontSize:17,
        color:'black',
      },
    
   /////////////////  Admission Form//////////
   formHeader:{
    height:Dimensions.get('window').height*0.15,
    width:"100%",
    backgroundColor:"#8BD2ED",
    justifyContent:'center',
    alignItems:'center',
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    borderColor:'#2680BE',
    borderWidth:1.5,
   },
   
 addformTxt:{
    fontSize:17,
    color:'black',
    fontWeight:'bold',
 },
 icrLogo:{
    height:50,
    width:50,
 },
 formView:{
    height:120,
    // width:"100%",
    flexDirection: "row",
    // justifyContent:'',
    // backgroundColor:'grey',
    // alignItems:'center',
    
 },
 imgForm:{
    height:Dimensions.get('window').height*0.15,
    width:Dimensions.get('window').width*.26, 
    borderRadius: 150 / 2, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor:'#8BD2ED',
    // marginLeft:10,
 },
 formTop:{
    height:Dimensions.get('window').height*0.2,
    width:Dimensions.get('window').width*0.8,
    // backgroundColor:'pink',
    marginTop:5,
    // justifyContent:'space-evenly',
    // alignContent:'center',
    

 },
 dropButton:{
    width: '90%',
    height: "25%",
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#030303',
    marginTop:10,

 },
 inquiryCourseButton:{
  width: '80%',
  height: "75%",
  backgroundColor: '#fff',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#030303',
  marginTop:10,

},
 
 bachButton:{
    width: '35%',
    height: "85%",
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#030303',
 },
 genderButton:{
  width: '30%',
  height: "80%",
  backgroundColor: '#fff',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#030303'
 },
 gal:{
    height:40,
    width:110,
    backgroundColor:'#8BD2ED',
    alignSelf:'flex-end',
    borderRadius:20,
    marginTop:5,
    marginRight:10,
    justifyContent:'center',
  },
  fram:{
    height:110,
    width:110,
   //  backgroundColor:'grey',
    alignSelf:'flex-end',
    borderRadius:20,
    // marginRight:5,
  },
  shiftView:{
    height:40,
    width:"100%",
    // backgroundColor:'pink',
    justifyContent:'space-evenly',
    flexDirection:'row',
    marginBottom:10,
  },
 
 inputView:{
  //  backgroundColor:'white',
   justifyContent:'center',
   flexDirection:"row",
   alignItems:"center",

},
inputTxt:{
   height:"80%",
   width:"60%",
   backgroundColor:'white',
   borderBottomWidth:1,
   paddingLeft:10,
   borderBottomColor:'grey',
},
subTxt:{
   fontSize:15,
   fontWeight:'bold',
   color:'#030303',
 },
 loginBtnCon: {
  height: '8%',
  backgroundColor: '#FFFFFFaa',
  // paddingTop: 10,
  justifyContent: 'flex-start',
  justifyContent: 'center',
alignItems: 'center',
},
loginbtn:{
  width: "40%",
height: "85%",
borderRadius: 8,
backgroundColor: '#8BD2ED',
justifyContent: 'center',
alignItems: 'center',

},
btnTxt: {
  fontSize: 22,
  color: '#030303',
  fontWeight:'bold',
},
courseButton: {
  backgroundColor: '#F6F6F6',
  borderRadius: 8,
  width: 190,
  height: 44,
  borderWidth: 1,
  borderColor: '#E8E8E8',
  marginBottom: 12,
  marginRight:5,
},
batchButton: {
  backgroundColor: '#F6F6F6',
  borderRadius: 8,
  width: 120,
  height: 40,
  borderWidth: 1,
  borderColor: '#E8E8E8',
  marginBottom: 12,
  marginRight:5,
},
input: {
  backgroundColor: "#F6F6F6",
  fontFamily: 'Inter-Regular',
  marginBottom: 12,
  paddingHorizontal: 16,
  paddingVertical: 10,
  borderWidth: 1,
  borderColor: "#E8E8E8",
  borderRadius: 8,
},
container: {
  // padding: 16,
},


})

export {styles} 