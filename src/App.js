import data from './data/data.json'
import List from './components/List'
import './App.scss'

const App = () => {
  data = JSON.parse(JSON.stringify(data))

  return (
    <div className={"app__wrapper"}>
      <List data={data} ifOpened={true}/>
    </div>
  );
}

export default App;
