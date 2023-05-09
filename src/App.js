
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebaseConfig';
import { getDocs, collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

function App() {

  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [btnType, setBtnType] = useState('create');
  const [create, setCreate] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const [updateId, setUpdateId] = useState(null);

  const usersCollectionRef = collection(db, "users");

  const createUser = async (e) => {
    e.preventDefault();

    if (newName.trim().length === 0 || newAge.trim().length === 0) {
      alert('insert something ....');
      return false;
    }

    await addDoc(usersCollectionRef, { name: newName, age: newAge }).finally(() => {
      setNewName('');
      setNewAge('');
      setCreate(!create)
    })
  }


  const handelUpdateUser = (id, name, age) => {
    setBtnType('update')
    setNewName(name);
    setNewAge(age);
    setUpdateId(id);

  }


  const updateUser = async (e) => {
    e.preventDefault();

    const userDoc = doc(db, 'users', updateId);
    const newData = { name: newName, age: newAge };
    await updateDoc(userDoc, newData).finally(() => {
      setNewName('');
      setNewAge('');
      setBtnType('create')
      setCreate(!create)
    });

  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);


    await deleteDoc(userDoc).finally(() => {
      setNewName('');
      setNewAge('');
      setBtnType('create')
      setCreate(!create);
    }

    )

  }

  useEffect(() => {
    const getusers = async () => {

      const data = await getDocs(usersCollectionRef).finally(() => {
        setLoadingUsers(false);
      });

      let localUsers = data.docs.map((doc) => {
        return ({ id: doc.id, ...doc.data() })
      })
      setUsers(localUsers);

    }

    getusers();

  }, [create , usersCollectionRef ]);

  return (
    <div className="App">

      <div className="form-card">
        <h2>Enter your details:</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter your name"
            value={newName}
            required />
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age"
            onChange={(e) => setNewAge(e.target.value)}
            placeholder="Enter your age"
            value={newAge}
            required />
          {
            btnType === 'create' ?
              <button type="submit" onClick={createUser}>Create</button>
              :
              <button type="submit" onClick={updateUser}>Update</button>

          }

        </form>

      </div>



      <h3 style={{ padding: '0px 20px' }}>All Users</h3>
      <div className='users-container'>

        {
          loadingUsers ?
            <h3>LOADING</h3>
            :
            users.map((user, i) => {

              return (
                <div className="card" key={user.id}>
                  <h2>Name: {user.name} </h2>
                  <p>Age: {user.age} </p>
                  <div className="buttons">
                    <button className="delete-btn" onClick={() => { deleteUser(user.id) }}>Delete</button>
                    <button className="update-btn" onClick={() => { handelUpdateUser(user.id, user.name, user.age) }}>Update</button>
                  </div>
                </div>
              )
            })
        }
      </div>


    </div>
  );
}

export default App;
