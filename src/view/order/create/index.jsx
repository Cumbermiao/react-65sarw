import React, { useState } from "react";
import PropTypes from "prop-types";
import './index.scss';

import {
  Group,
  TextField,
  Field,
  CascadeSelectField,
  TextareaField,
  PhotoField,
  Button,
  Dialog,
  Toast
} from "saltui";

const { Count } = TextareaField;

function RequiredLabel(props) {
  const fill = props.fill || "#f266a9";
  return (
    <span>
      <i style={{ color: fill }}>*</i> {props.children}
    </span>
  );
}

RequiredLabel.propTypes = {
  fill: PropTypes.string,
};

const showToast = options => {
  Toast.show(options)
}

export default function CreateOrder() {
  const [title, setTitle] = useState("");
  const [system, setSystem] = useState([]);
  const [emergency, setEmergency] = useState([]);
  const [influence, setInfluence] = useState([]);
  const [severity, setSeverity] = useState([]);
  const [desc, setDesc] = useState("");
  const [photos, setPhotos] = useState([]);
  const systemList = [
    {
      label: "测试1",
      value: "1",
      children: [
        { label: "测试1-1", value: "1-1" },
        { label: "测试1-2", value: "1-2" },
      ],
    },
    {
      label: "测试2",
      value: "2",
      children: [
        { label: "测试2-1", value: "2-1" },
        { label: "测试2-2", value: "2-2" },
      ],
    },
  ];
  const influenceList = [
    { label: "低度影响", value: "1" },
    { label: "中度影响", value: "2" },
    { label: "高度影响", value: "3" },
  ]
  const emergencyList = [
    { label: "普通", value: "1" },
    { label: "急", value: "2" },
    { label: "紧急", value: "3" },
  ];
  const severityList = [
    { label: 'Ⅳ级事件', value: '1'},
    { label: 'Ⅲ级事件', value: '2'},
    { label: 'Ⅱ级事件', value: '3'},
    { label: 'Ⅰ级事件', value: '4'},
  ]

  const dobuleCheck =() =>{
    Dialog.confirm({
      content: '确认提交吗',
      onConfirm() {
        console.log('alert confirm');
        showToast({
          type: 'success',
          content: '提交成功'
        })
      },
      onCancel() {
        console.log('cancel')
        showToast({
          type: 'error',
          content: '提交失败'
        })
      }
    })
  }
  return (
    <div className="page-create-order">
      <Group.List>
        <TextField
          label={<RequiredLabel>标题</RequiredLabel>}
          placeholder="请输入"
          errMsg="rr"
          layout="v"
          value={title}
          onChange={(str) => setTitle(str)}
        />
      </Group.List>
      <Group.List>
        <CascadeSelectField
          label={<RequiredLabel>业务系统</RequiredLabel>}
          options={systemList}
          value={system}
          layout="v"
          onSelect={(val) => setSystem(val)}
        />
      </Group.List>
      <Group.List>
        <CascadeSelectField
          label={<RequiredLabel>紧急程度</RequiredLabel>}
          options={emergencyList}
          value={emergency}
          layout="v"
          onSelect={(val) => setEmergency(val)}
        />
      </Group.List>
      <Group.List>
        <CascadeSelectField
          label={<RequiredLabel>影响范围</RequiredLabel>}
          options={influenceList}
          value={influence}
          layout="v"
          onSelect={(val) => setInfluence(val)}
        />
      </Group.List>
      <Group.List>
        <CascadeSelectField
          label={<RequiredLabel>严重等级</RequiredLabel>}
          options={severityList}
          value={severity}
          layout="v"
          onSelect={(val) => setSeverity(val)}
        />
      </Group.List>
      <Group.List>
        <TextareaField
          label={<RequiredLabel>问题描述</RequiredLabel>}
          value={desc}
          placeholder="请输入"
          minRows={3}
          onChange={(val) => setDesc(val)}
          layout="v"
        >
          <Count total={140} length={desc.length} />
        </TextareaField>
      </Group.List>
      <Group.List>
        <PhotoField.H5
          label="图片"
          placeholder="请选择图片"
          required
          max={4}
          maxUpload={9}
          name="file"
          url="http://eternalsky.me:8122/file/upload"
          photoList={photos}
          onChange={(list) => setPhotos(list)}
        />
      </Group.List>

      <div className='submit-btn'>
        <Button type="primary" onClick={dobuleCheck}>提交</Button>
      </div>
    </div>
  );
}
