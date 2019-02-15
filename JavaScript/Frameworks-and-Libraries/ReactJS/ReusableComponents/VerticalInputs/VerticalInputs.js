import React, { Component } from 'react';
import styles from './VerticalInputs.css';

/*
* Example usage: <VerticalInputs margin={20} fontSize={20}/>
* Pass in margin and fontSize styling as int numbers for props.
* @param int margin The prop for the margin
* @param int fontSize The prop for the font size.
*/
class VerticalInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    const {margin,fontSize} = this.props;
    const pStyle = {
      margin,
      fontSize
    };

    return (
      <div className={styles.container}>

        <form>
          <div className={styles.postDateAndTitleContainer} style={pStyle}>
            <div className={styles.textAndInputCont} >
              <div className={styles.inputLabel}>
                Post Date:
              </div>
              <div id={styles.postDateInput}>
                <input type="text" name="postDate" />
              </div>
            </div>

            <div className={styles.textAndInputCont} >
              <div className={styles.inputLabel}>
                Title:
              </div>
              <div id={styles.postDateInput}>
                <input type="text" name="postTitle" />
              </div>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default VerticalInputs;
