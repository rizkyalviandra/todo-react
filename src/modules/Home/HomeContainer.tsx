import { Button, Modal, Tabs } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { useLoading } from "../../hooks";
import useTodoStore from "../../stores/useTodoStore";
import LayoutComponent from "../../uikit/Layout";

const AddForm = React.lazy(() => import("./components/AddForm"));
const ListTodo = React.lazy(() => import("./components/ListTodo"));

type TodoFormValue = any;

const HomeContainer = () => {
  const { buttonLoading, onButtonLoading } = useLoading();
  const [formModal, setFormModal] = React.useState<{
    isOpen: boolean;
    mode: "create" | "edit" | null;
    id: any;
  }>({
    isOpen: false,
    mode: null,
    id: 0,
  });

  const [form] = useForm<TodoFormValue>();
  const { todos, addTodo, updateTodo, completedTodo } = useTodoStore();
  const [id, setId] = React.useState<number>(0);

  async function onFinish(values: TodoFormValue) {
    if (formModal.id === 0) {
      await addTodo(values);
    } else {
      console.log("edit =>");
      await updateTodo(parseInt(formModal.id), values);
    }
    setFormModal({
      isOpen: false,
      mode: null,
      id: 0,
    });
    form.resetFields();
  }

  async function openEditForm(id: number) {
    await setFormModal({
      isOpen: true,
      mode: "edit",
      id,
    });
    await form.setFieldsValue(todos.filter((x: any) => x.id == id)[0]);
    console.log(
      "todos =>",
      todos.filter((x: any) => x.id == id)
    );
  }
  return (
    <LayoutComponent>
      <Button
        style={{ borderRadius: 5, marginTop: 10, marginLeft: 390 }}
        type='primary'
        onClick={() => setFormModal({ isOpen: true, mode: "create", id: 0 })}
      >
        Add Todo
      </Button>
      <Tabs defaultActiveKey='1' centered>
        <Tabs.TabPane tab='Progress' key='1'>
          <ListTodo
            todos={todos
              .filter((x: any) => x.status === 0)
              .sort((a: any, b: any) => a.createdAt - b.createdAt)}
            onClick={(e: any) => openEditForm(e.target.id)}
            isDone={(e: any) => completedTodo(e.target.id)}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Done' key='2'>
          <ListTodo
            todos={todos
              .filter((x: any) => x.status === 1)
              .sort((a: any, b: any) => b.createdAt - a.createdAt)}
            onClick={(e: any) => openEditForm(e.target.id)}
          />
        </Tabs.TabPane>
      </Tabs>
      <Modal
        title={
          formModal.mode === "create"
            ? "Create Todo"
            : formModal.mode === "edit"
            ? "Edit Todo"
            : null
        }
        visible={formModal.isOpen}
        onCancel={() => setFormModal({ isOpen: false, mode: null, id: 0 })}
        onOk={form.submit}
        okText='Submit'
        okButtonProps={buttonLoading}
      >
        <AddForm form={form} onFinish={onFinish} />
      </Modal>
    </LayoutComponent>
  );
};

export default HomeContainer;
