import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaUnlockAlt, FaLock, FaCopy, FaQrcode, FaEye } from 'react-icons/lib/fa';
import MdPictureAsPdf from 'react-icons/lib/md/picture-as-pdf';
import Delete from 'react-icons/lib/md/delete';

class MyQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.removeQuestion = this.removeQuestion.bind(this);
    this.setPrivacy = this.setPrivacy.bind(this);
  }
  setPrivacy() {
    Meteor.call('questions.setPrivacy', this.props.viewID, !this.props.privacy);
  }
  removeQuestion() {
    Meteor.call('questions.removeQuestion', this.props.viewID);
  }
  render() {
    return (
      <div className="form__container">
        {this.state.copied ?
          <p className="item">Link has been successfully copied !</p>
          : null
        }
        <p className="item">
          {this.props.questionIndex} ) {this.props.question}
        </p>
        <div className="form__share">
          <div className="form__share__buttons">
            <CopyToClipboard
              text={`http://votinio.herokuapp.com/question/${this.props.viewID}`}
              onCopy={() => this.setState({ copied: true })}
            >
              <button
                className="button button--anchor tooltip"
              >
                <FaCopy size={30} />
                <span className="tooltiptext">Copy the question link.</span>
              </button>
            </CopyToClipboard>
            <Link
              to={`/charts/${this.props.viewID}`}
              className="button button--anchor tooltip"
            ><FaEye size={30} />
              <span className="tooltiptext">Visualize the data.</span>
            </Link>
            <Link
              to={`/qr/${this.props.viewID}`}
              className="button button--anchor tooltip"
            ><FaQrcode size={30} />
              <span className="tooltiptext">Generate a QRCode.</span>

            </Link>
            <Link
              to={`/pdf/${this.props.viewID}`}
              className="button button--anchor tooltip"
            ><MdPictureAsPdf size={30} />
              <span className="tooltiptext">Generate a PDF.</span>
            </Link>
            <button
              className="button button--anchor tooltip"
              onClick={this.setPrivacy}
            >{this.props.privacy ? <FaLock size={30} /> : <FaUnlockAlt size={30} />}
              <span className="tooltiptext">{this.props.privacy ? 'Unlock the question.' : 'Lock the question.'}
              </span>
            </button>
            <button
              rel="noopener noreferrer"
              className="button button--anchor button__remove tooltip"
              onClick={this.removeQuestion}
            ><Delete size={30} />
              <span className="tooltiptext">Delete this question.</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

MyQuestions.propTypes = {
  viewID: PropTypes.string.isRequired,
  question: PropTypes.string,
  questionIndex: PropTypes.number,
  privacy: PropTypes.bool
};

export default MyQuestions;
