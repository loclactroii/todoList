import Filter from "./components/Filters";
import TodoList from "./components/TodoList";
import { Divider, Typography } from 'antd'


function App() {
  return (
    <div
      style={{
        width: '500px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Typography.Title style={{textAlign: 'center'}}>Todo App With Redux</Typography.Title>
      <Filter />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
