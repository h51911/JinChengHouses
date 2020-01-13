import React, { Component } from 'react';
import './form.less';

import axios from 'axios';
import Mock from 'mockjs';
import moment from 'moment';
import { Row, Col, Input, Icon, Cascader, DatePicker, Button, Tooltip, Popconfirm, message } from 'antd';

import BreadcrumbCustom from '../common/BreadcrumbCustom';
import address from './request/address.json';
import data from './request/data.json';
import CollectionCreateForm from './CustomizedForm';
import FormTable from './FormTable';

const Search = Input.Search;
const InputGroup = Input.Group;
const options = [];
const { RangePicker } = DatePicker;
Mock.mock('/address', address);
Mock.mock('/data', data);

//数组中是否包含某项
function isContains(arr, item) {
    // arr.map(function (ar) {
    //     if (ar === item) {
    //         return true;
    //     }
    // });
    // return false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}
//找到对应元素的索引
function catchIndex(arr, key) { //使用数组的每项循环去找获取INDEX
    // let index = 0;
    // arr.map(function (ar, index) {
    //     if (ar.key2 === key) {
    //         // return index;
    //         index=index;
    //     }
    // });
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].key2 == key) return i;
    }
    // return index;
}
//替换数组的对应项
function replace(arr, item, place) { //arr 数组,item 数组其中一项, place 替换项
    arr.map(function (ar) {
        if (ar.key2 === item) {
            arr.splice(arr.indexOf(ar), 1, place)
        }
    });
    return arr;
}

export default class UForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            address: '',
            timeRange: '',
            visible: false, //新建窗口隐藏
            dataSource: [],
            count: data.length,
            selectedRowKeys: [],
            tableRowKey: 0,
            isUpdate: false,
            loading: true,
        };
    }
    error = (str) => {
        message.error(str);
    };
    success = (str) => {
        message.success(str);
    }
    //getData
    getData = () => {
        // axios.get('/data')
        axios.get('http://localhost:1912/user/getUser')
            .then(function (response) {
                // console.log(response.data, '获取的数据');
                this.setState({
                    dataSource: response.data,
                    loading: false
                })
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            })
    };
    //用户名输入
    onChangeUserName = (e) => {
        const value = e.target.value;
        this.setState({
            userName: value,
        })
    };
    //用户名搜索
    onSearchUserName = (value) => {
        // console.log(value);
        const { dataSource } = this.state;
        this.setState({
            dataSource: dataSource.filter(item => item.name.indexOf(value) !== -1),
            loading: false,
        })
    };
    //地址级联选择
    Cascader_Select = (value) => {
        const { dataSource } = this.state;
        if (value.length === 0) {
            this.setState({
                address: value,
                dataSource: [],
            });
            this.getData();
        } else {
            this.setState({
                address: value,
                dataSource: dataSource.filter(item => item.address === value.join(' / '))
            });
        }
    };
    //时间选择
    RangePicker_Select = (date, dateString) => {
        // console.log(date, dateString);
        const { dataSource } = this.state;
        const startime = moment(dateString[0]);
        const endtime = moment(dateString[1]);
        if (date.length === 0) {
            this.setState({
                timeRange: date,
                dataSource: [],
            });
            this.getData();
        } else {
            this.setState({
                timeRange: date,
                dataSource: dataSource.filter(item => (moment(item.createtime.substring(0, 10)) <= endtime && moment(item.createtime.substring(0, 10)) >= startime) === true)
            });
        }
    };
    //渲染
    componentDidMount() {
        axios.get('/address')
            .then(function (response) {
                response.data.map(function (province) {
                    options.push({
                        value: province.name,
                        label: province.name,
                        children: province.city.map(function (city) {
                            return {
                                value: city.name,
                                label: city.name,
                                children: city.area.map(function (area) {
                                    return {
                                        value: area,
                                        label: area,
                                    }
                                })
                            }
                        }),
                    })
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        this.getData();
    }
    //搜索按钮
    btnSearch_Click = () => {

    };
    //重置按钮
    btnClear_Click = () => {
        this.setState({
            userName: '',
            address: '',
            timeRange: '',
            dataSource: [],
            count: data.length,
        });
        this.getData();
    };
    //新建信息弹窗
    CreateItem = () => {
        this.setState({
            visible: true,
            isUpdate: false,
        });
        const form = this.form;
        form.resetFields();
    };
    //接受新建表单数据
    saveFormRef = (form) => {
        this.form = form;
    };
    //填充表格行（添加数据）
    handleCreate = () => {
        const { dataSource, count } = this.state;
        const form = this.form;
        form.validateFields(async (err, values) => {
            if (err) {
                return;
            }
            // console.log('Received values of form: ', values, '添加数据');
            
            // values.key = count;
            values.key2 = dataSource[dataSource.length-1].key2+1;
            values.address = values.address.join(" / ");
            values.createtime = moment().format("YYYY-MM-DD hh:mm:ss");

            // form.resetFields();
            console.log(values,dataSource[dataSource.length-1].key2+1,dataSource,'text')
            this.setState({
                // visible: false,
                dataSource: [...dataSource, values],
                count: count + 1,
            });
            //请求插入数据
            let { data } = await axios.post('http://localhost:1912/user/addUser', {
                values
            })
            if (data.code) {
                this.error("添加失败，已经存在该用户！")
            } else {
                this.success("添加成功!")
                this.setState({
                    visible: false,
                });
                form.resetFields();
            }
            // console.log(data);





        });
    };


    //取消
    handleCancel = () => {
        this.setState({ visible: false });
    };
    //批量删除
    MinusClick = async () => {
        const { dataSource, selectedRowKeys } = this.state;
        this.setState({
            dataSource: dataSource.filter(item => !isContains(selectedRowKeys, item.key2)),
        });
        console.log(selectedRowKeys);
        let { data } = await axios.post('http://localhost:1912/user/delMoreUser', {
            selectedRowKeys
        })
    };
    //单个删除
    onDelete = async (key) => {
        // console.log(key)
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key2 !== key) });
        //发送请求删除数据
        let { data } = await axios.post('http://localhost:1912/user/delUser', {
            key
        })
    };
    //点击修改
    editClick = (key) => {
        // console.log(key);
        const form = this.form;
        const { dataSource } = this.state;
        const index = catchIndex(dataSource, key);
        form.setFieldsValue({
            key2: key,
            name: dataSource[index].name,
            sex: dataSource[index].sex,
            age: dataSource[index].age,
            address: dataSource[index].address.split(' / '),
            phone: dataSource[index].phone,
            email: dataSource[index].email,
            website: dataSource[index].website,
        });
        // console.log(dataSource,index,key)
        // let index2 = dataSource.indexOf(key);
        // console.log(index2)
        this.setState({
            visible: true,
            tableRowKey: key,
            isUpdate: true,
        });
    };
    //更新修改
    handleUpdate = () => {
        const form = this.form;
        const { dataSource, tableRowKey } = this.state;
        form.validateFields(async (err, values) => {
            if (err) {
                return;
            }
            // console.log(values);


            // console.log('Received values of form: ', values);

            values.key2 = tableRowKey;
            values.address = values.address.join(" / ");
            values.createtime = moment().format("YYYY-MM-DD hh:mm:ss");
            // let arr = JSON.parse(JSON.stringify(dataSource));
            // let {name,sex,age,address,phone,email}
            // arr.forEach(item=>{
            //     if(item.key2 == values.key2){

            //     }
            // })

            // form.resetFields();
            this.setState({
                visible: false,
                dataSource: replace(dataSource, tableRowKey, values)
            });
            //请求更新数据
            let { data } = await axios.post('http://localhost:1912/user/editUser', {
                values
            })
            if (data.code) {
                this.error("更新失败，已经存在该用户！")
            } else {
                this.success("更新成功!")
                this.setState({
                    visible: false,
                });
                form.resetFields();
            }
            // console.log(data,'sss');



        });
    };

    //单选框改变选择
    checkChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys: selectedRowKeys });
    };
    render() {
        const { userName, address, timeRange, dataSource, visible, isUpdate, loading } = this.state;
        const questiontxt = () => {
            return (
                <p>
                    <Icon type="plus-circle-o" /> : 新建信息<br />
                    <Icon type="minus-circle-o" /> : 批量删除
                </p>
            )
        };
        return (
            <div>
                <BreadcrumbCustom paths={['首页', '表单']} />
                <div className='formBody'>
                    <Row gutter={16}>
                        <Col className="gutter-row" sm={8}>
                            <Search
                                placeholder="Input Name"
                                prefix={<Icon type="user" />}
                                value={userName}
                                onChange={this.onChangeUserName}
                                onSearch={this.onSearchUserName}
                            />
                        </Col>
                        <Col className="gutter-row" sm={8}>
                            <InputGroup compact>
                                <Cascader style={{ width: '100%' }} options={options} placeholder="Select Address" onChange={this.Cascader_Select} value={address} />
                            </InputGroup>
                        </Col>
                        <Col className="gutter-row" sm={8}>
                            <RangePicker style={{ width: '100%' }} onChange={this.RangePicker_Select} value={timeRange} />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <div className='plus' onClick={this.CreateItem}>
                            <Icon type="plus-circle" />
                        </div>
                        <div className='minus'>
                            <Popconfirm title="确定要批量删除吗?" onConfirm={this.MinusClick}>
                                <Icon type="minus-circle" />
                            </Popconfirm>
                        </div>
                        <div className='question'>
                            <Tooltip placement="right" title={questiontxt}>
                                <Icon type="question-circle" />
                            </Tooltip>
                        </div>
                        <div className='btnOpera'>
                            <Button type="primary" onClick={this.btnSearch_Click} style={{ marginRight: '10px' }}>查询</Button>
                            <Button type="primary" onClick={this.btnClear_Click} style={{ background: '#f8f8f8', color: '#108ee9' }}>重置</Button>
                        </div>
                    </Row>
                    <FormTable
                        dataSource={dataSource}
                        checkChange={this.checkChange}
                        onDelete={this.onDelete}
                        editClick={this.editClick}
                        loading={loading}
                    />
                    {isUpdate ?
                        <CollectionCreateForm ref={this.saveFormRef} visible={visible} onCancel={this.handleCancel} onCreate={this.handleUpdate} title="修改信息" okText="更新"
                        /> : <CollectionCreateForm ref={this.saveFormRef} visible={visible} onCancel={this.handleCancel} onCreate={this.handleCreate} title="新建信息" okText="创建"
                        />}
                </div>
            </div>
        )
    }
}