import React, { Component,PureComponent } from 'react';

import Button  from './page/index'
console.log(Component,'Component')
console.log(PureComponent,'PureComponent')


import './index.css'


export default class App extends Component {

	 constructor(props) {
        super(props);

        this.state={
            step:0
        }
    }

   isEmptyObject(obj) {
        if (typeof obj == 'number') {
            return true;
        }
        var name;
        for (name in obj) return false;
        return true;
    }

    getGata(){
        let list = [];
        $.get('/homeport',(res)=>{
            if(this.isEmptyObject(res)){
                this.setState({
                    step:1
                })
            }else{
                for(var key in res){
                    var obj = {};
                    obj.ip = key;
                    obj.port = res[key];
                    list.push(obj)
                }

                this.setState({
                    list:list,
                    step:2
                })
            }
        })

    }

	componentDidMount(){
	  	console.log(2222)
        this.getGata()
	}
    render() {
        const {step,list}=this.state;
        return (

            <div >
                {step==1&&<div>没有开启</div>}

                {step==2&&<div>

                    {
                        list.map((item,i)=>{
                            return <div>
                                <span className="ceshi">{item.ip}</span>
                                <span>{item.port}</span>

                                <a href={`http://${item.ip}:8000?port=${item.port}`} target="_blank">前往</a>
                            </div>
                        })
                    }
                </div>}


             </div>
        );
    }
}