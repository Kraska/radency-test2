import './App.css';
import NotesTable from './components/NotesTable';
import SummaryTable from './components/SummaryTable';

function App() {
  return (
    <div className="App">
        <section>
            <NotesTable />
            <SummaryTable />
        </section>
    </div>
  );
}

export default App;
