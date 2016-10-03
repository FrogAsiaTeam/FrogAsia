import React, { Component } from 'react';
export default class DataService extends Component {
static  getFrogData(){
   fetch('https://hhoang21.cloudant.com/hhoang21/frogapp')
     .then((response) => response.json())
     .then((responseJson) => {
       return responseJson.data;
     })
     .catch((error) => {
       console.error(error);
     });

  }
}
