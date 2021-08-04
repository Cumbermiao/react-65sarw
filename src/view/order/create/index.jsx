import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Group,
  TextField,
  Field,
  CascadeSelectField,
  TextareaField,
  Count
} from 'saltui';

function RequiredLabel(props) {
  const fill = props.fill || '#f266a9';
  return (
    <span>
      <i style={{ color: fill }}>*</i> {props.children}
    </span>
  );
}

RequiredLabel.propTypes = {
  fill: PropTypes.string
};

export default function CreateOrder() {
  const [title, setTitle] = useState('');
  const [system, setSystem] = useState('');
  const [emergency, setEmergency] = useState('');
  const systemList = [
    {
      label: '测试1',
      value: '1',
      children: [
        { label: '测试1-1', value: '1-1' },
        { label: '测试1-2', value: '1-2' }
      ]
    },
    {
      label: '测试2',
      value: '2',
      children: [
        { label: '测试2-1', value: '2-1' },
        { label: '测试2-2', value: '2-2' }
      ]
    }
  ];
  const emergencyList = [
    { label: '低', value: '1' },
    { label: '中', value: '2' },
    { label: '高', value: '3' }
  ];
  return (
    <div class="page-create-order">
      <Group.List>
        <TextField
          label={<RequiredLabel>标题</RequiredLabel>}
          placeholder="请输入"
          errMsg="rr"
          layout="v"
          value={title}
          onChange={str => setTitle(str)}
        />
      </Group.List>
      <Group.List>
        <CascadeSelectField
          label={<RequiredLabel>业务系统</RequiredLabel>}
          options={systemList}
          value={system}
          layout="v"
          onSelect={val => setSystem(val)}
        />
      </Group.List>
      <Group.List>
        <CascadeSelectField
          label={<RequiredLabel>紧急程度</RequiredLabel>}
          options={emergencyList}
          value={emergency}
          layout="v"
          onSelect={val => setEmergency(val)}
        />
      </Group.List>
      <Group.List>
        <CascadeSelectField
          label={<RequiredLabel>影响范围</RequiredLabel>}
          options={emergencyList}
          value={emergency}
          layout="v"
          onSelect={val => setEmergency(val)}
        />
      </Group.List>
      <Group.List>
        <TextareaField
          label={<RequiredLabel>问题描述</RequiredLabel>}
          value={emergency}
          onChange={val => setEmergency(val)}
          layout="v"
        >
          <Count total={300} length={12} />
        </TextareaField>
      </Group.List>
      <Group.List>
        <Field
          label={<span>*上下结构</span>}
          layout="v"
          tip={
            <div>
              这里是tip这里是tip这里是tip这里是tip这里是tip这里是tip这里是tip这里是tip
              <a href="https://salt-ui.github.io/" target="_blank">
                salt-ui
              </a>
              这里是tip
            </div>
          }
          errMsg="错误"
        >
          <div>自定义输入元素的区域, 带tip</div>
        </Field>
      </Group.List>
    </div>
  );
}
