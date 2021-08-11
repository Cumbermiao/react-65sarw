import React, { useState } from "react";
import { Group, Field, CascadeSelectField, Button } from "saltui";

export default function DetailForm(props) {
  const [result, setResult] = useState([]);
  const formItems = [
    { label: "标题", value: "标题xxxx" },
    { label: "业务系统", value: "系统一" },
    { label: "节点名称", value: "验收节点" },
    { label: "紧急程度", value: "低" },
    { label: "影响范围", value: "中" },
    {
      label: "问题描述",
      value: "问题描述文字较多XXXXXX XXXXXXXXXXXXX XXXXXXX XXXXXXXX",
    },
  ];

  const results = [
    { label: "完全解决", value: "1" },
    { label: "变通解决", value: "2" },
    { label: "部分解决", value: "3" },
    { label: "未能解决", value: "4" },
  ];

  return (
    <div className="detail-form">
      <Group>
        <Group.Head>事件上报</Group.Head>
        {formItems.map((item) => (
          <Group.List key={item.label}>
            <Field label={item.label} layout="v">
              <p>{item.value}</p>
            </Field>
          </Group.List>
        ))}
        <Group.List>
          <Field label="图片" layout="v">
            <img src="http://10.3.7.242:8987/dtc/images/20210602/1622627567443.jpg"></img>
            <img src="http://10.3.7.242:8987/dtc/images/20210602/1622627567443.jpg"></img>
          </Field>
        </Group.List>
        <Group.List>
          <Field label="附件" layout="v">
            <p>
              <a
                href="http://10.3.7.242:8987/dtc/images/20210602/1622627567443.jpg"
                download
              >
                1622627567443.jpg
              </a>
            </p>
            <p>
              <a
                href="http://10.3.7.242:8987/dtc/images/20210602/1622627567443.jpg"
                download
              >
                1622627567443.jpg
              </a>
            </p>
          </Field>
        </Group.List>
      </Group>

      <Group>
        <Group.Head>事件确认</Group.Head>

        <Group.List>
          <CascadeSelectField
            label="解决程度"
            options={results}
            value={result}
            layout="v"
            onSelect={(val) => setResult(val)}
          />
        </Group.List>
      </Group>

      <div className="submit-btn">
        <Button type="primary">提交</Button>
      </div>
    </div>
  );
}
