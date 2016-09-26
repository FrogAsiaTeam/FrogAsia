import React,{Component} from 'react';
import {
View,
Text
} from 'react-native';
import StarRating from 'react-native-star-rating';

export default class Rating extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <StarRating
        disabled={this.props.disabled}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={this.props.rating}
        selectedStar ={()=>{}}
        starColor={this.props.starColor}
        starSize={this.props.starSize}
      />

    );
  }
}

Rating.propTypes ={
  disabled:React.PropTypes.bool.isRequired,
  rating:React.PropTypes.number.isRequired,
  starSize: React.PropTypes.number.isRequired,
  starColor: React.PropTypes.string.isRequired
}
