import { Button, Divider, List, Switch, Typography } from "antd";
import React from "react";

type Props = {
  todos: any;
  onClick: any;
  isDone?: any;
  onDelete?: any;
};

const ListTodo = ({ todos, onClick, isDone, onDelete }: Props) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={todos}
      renderItem={(item: any) => (
        <List.Item
          id={item.id}
          style={{ cursor: "pointer" }}
          actions={[
            item.status === 0 ? (
              <Button type='text' onClick={isDone}>
                Done
              </Button>
            ) : null,
            <Button type='text' onClick={onDelete}>
              Delete
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={
              <Typography.Title id={item.id} onClick={onClick} level={4}>
                {item.title}
              </Typography.Title>
            }
            description={
              <Typography.Paragraph id={item.id}>
                {item.description}
              </Typography.Paragraph>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default ListTodo;
