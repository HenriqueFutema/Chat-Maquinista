import React, { Component } from 'react';


export default class Message extends Component {
  render() {
    return (

        <div>
            {this.props.msg.user ? (
                <div className="row mt-3 justify-content-end" key={this.props.msg._id}>
                    <div className="col-8 msg p-2">
                    <h6>{this.props.msg.author}:              </h6>
                    <p>{this.props.msg.content}</p>
            
                    </div>
                </div>
            ): 
                <div className="row mt-3" key={this.props.msg._id}>
                    <div className="col-8 msg p-2">
                    <h6>{this.props.msg.author}:              </h6>
                    { this.props.msg.type === 'text' ? (
                        <p>{this.props.msg.content}</p>
                    )
                    :(
                        <p className="text-center"><img src={this.props.msg.content} alt="" srcset="" className="img-fluid"/></p>
                    )

                }

                    </div>
                </div>
            }
        </div>

    );
  }
}
