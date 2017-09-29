import React, { Component } from 'react';

class Directchat extends Component {
    constructor(){
        super();
       
    }
    
    componentWillMount() {
        this.state = {
            
            messages2: {},
            messages: [
                { id: 1, time: "12:32am", date: new Date().getTime(), message: "Welcome to KayStore!! chat with us and do what you love", sender: "kola" }
            ]
        }
    }
    
    submitChat = (e)=>{
        e.preventDefault();
        var message = this.refs.chat.value;
        var date = new Date().getTime();
        var sender = 'habeeb kola';
        var id = (Math.random(5)+1);
        var state = this.state.messages;
        state.push({ id: id, date: date, message: message, sender: sender });
        this.setState({messages:state },
        ()=>{
            console.log(this.state.messages);
        })
    }
    render() {
        return (
            <div>
                <div className="box box-danger direct-chat direct-chat-danger hide" style={{ "boxShadow": "0 4px 5px 0 #000"}}>
                    <div className="box-header with-border">
                        <h3 className="box-title">Direct Chat</h3>
                        <div className="box-tools pull-right">
                            <span data-toggle="tooltip" title="3 New Messages" className="badge bg-red">3</span>
                            <button className="btn btn-box-tool dismiss" data-widget="collapse"><i className="fa fa-minus"></i></button>
                            {/* <!-- In box-tools add this button if you intend to use the contacts pane --> */}
                            <button className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle"><i className="fa fa-comments"></i></button>
                            <button className="btn btn-box-tool dismiss" data-widget="remove"><i className="fa fa-times"></i></button>
                        </div>
                    </div>
                   
                <div className="box-body">
                      
                    <div className="direct-chat-messages">
                            {this.state.messages.map((chat) => {
                                if (chat.sender === 'kola') 
                                    return (
                                    <div className="direct-chat-msg">
                                        <div className="direct-chat-info clearfix">
                                            <span className="direct-chat-name pull-left">Alexander Pierce</span>
                                            <span className="direct-chat-timestamp pull-right">{chat.date}</span>
                                        </div>

                                        <img className="direct-chat-img" src="../admin/img/user1-128x128.jpg" alt="message user image" />

                                        <div className="direct-chat-text">
                                            {chat.message}
                                        </div>
                                    </div>
                                    )
                                   return( <div className="direct-chat-msg right">
                                        <div className="direct-chat-info clearfix">
                                            <span className="direct-chat-name pull-right">{chat.sender}</span>
                                            <span className="direct-chat-timestamp pull-left">{chat.date}</span>
                                        </div>
                                        <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="message user image" />
                                        <div className="direct-chat-text">
                                            {chat.message}
                                        </div>
                                    </div> 
                                   )
                                   })}
                     
                    </div>
                           
                    {/* <!--/.direct-chat-messages--> */}

                    {/* <!-- Contacts are loaded here --> */}
    <div className="direct-chat-contacts">
                                    <ul className="contacts-list">
                                        <li>
                                            <a href="#">
                                                <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="Contact Avatar" />
                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name">
                                                            Count Dracula
                <small className="contacts-list-date pull-right">2/28/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">How have you been? I was...</span>
                                                    </div>
                                                    {/* <!-- /.contacts-list-info --> */}
          </a>
        </li>
        {/* <!-- End Contact Item --> */}
      </ul>
      {/* <!-- /.contatcts-list --> */}
    </div>
    {/* <!-- /.direct-chat-pane --> */}
  </div>
  {/* <!-- /.box-body --> */}
  <div className="box-footer">
                                    <div className="input-group">
                                        <input type="text" name="message" placeholder="Type Message ..." ref="chat" className="form-control t" />
                                            <span className="input-group-btn">
                                                <button type="button" onClick={this.submitChat}className="btn btn-danger btn-flat">Send</button>
                                            </span>
    </div>
                                    </div>
                                    {/* <!-- /.box-footer--> */}
</div>
            </div>
        )
    }
}

export default Directchat;