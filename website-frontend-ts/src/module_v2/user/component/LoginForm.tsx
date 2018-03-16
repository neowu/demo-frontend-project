import React from "react";
import {connect} from "react-redux";
import {Alert, Button, Form, Input} from "antd";
import {Dispatch} from "redux";
import {FormComponentProps} from "antd/lib/form";
import {RootState} from "model/state";
import {actions} from "../type";
import "./loginForm.less";

interface Props extends FormComponentProps {
    errorMessage?: string;
    dispatch: Dispatch<any>;
}

const LoginForm: React.SFC<Props> = ({dispatch, form, errorMessage}) => {
    const onSubmit = event => {
        event.preventDefault();
        form.validateFields((errors, values) => {
            if (!errors) {
                dispatch(actions._login({
                    username: values.username,
                    password: values.password
                }));
            }
        });
    };

    const usernameDecorator = form.getFieldDecorator("username", {
        rules: [{
            required: true,
            message: "Please input your username!"
        }]
    });

    const passwordDecorator = form.getFieldDecorator("password", {
        rules: [{
            required: true,
            message: "Please input your Password!"
        }]
    });

    return <div>
        {errorMessage ? <Alert message="Login Failed" description={errorMessage} type="error" closable/> : null}
        <Form onSubmit={onSubmit} className="login-form">
            <Form.Item>
                {usernameDecorator(<Input placeholder="Username"/>)}
            </Form.Item>
            <Form.Item>
                {passwordDecorator(<Input type="password" placeholder="Password"/>)}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
            </Form.Item>
        </Form>
    </div>;
};

export default connect((state: RootState) => ({
    errorMessage: state.app.user.login.errorMessage
}))(Form.create()(LoginForm) as any);