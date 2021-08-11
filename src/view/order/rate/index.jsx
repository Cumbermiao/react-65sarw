import React, { useState } from "react";
import { RateField, Group, TextareaField } from "saltui";

const { Count } = TextareaField;

export default function Rate(props) {
  const [rate1, setRate1] = useState(0);
  const [rate2, setRate2] = useState(0);
  const [rate3, setRate3] = useState(0);
  const [desc, setDesc] = useState("");

  const prop = {
    total: 5,
    size: "normal",
    location: "down",
    label: "总体评价",
    showLabel: true,
    layout: 'v'
  };
  return (
    <div className="page-order-detail">
      <Group.List>
        <RateField
          {...{ prop }}
          value={rate1}
          onChange={(val) => setRate1(val)}
        ></RateField>
      </Group.List>
      <Group.List>
        <RateField
          {...{ prop }}
          value={rate2}
          onChange={(val) => setRate2(val)}
        ></RateField>
      </Group.List>
      <Group.List>
        <RateField
          {...{ prop }}
          value={rate3}
          onChange={(val) => setRate3(val)}
        ></RateField>
      </Group.List>
      <Group.List>
        <TextareaField
          label="评价描述"
          value={desc}
          placeholder="请输入"
          minRows={3}
          onChange={(val) => setDesc(val)}
          layout="v"
        >
          <Count total={140} length={desc.length} />
        </TextareaField>{" "}
      </Group.List>
    </div>
  );
}
