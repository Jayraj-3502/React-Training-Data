# 📚 React — Lists, Keys, Conditional Rendering, State vs Refs, and Lifecycle Methods

## 📝 1. Lists and Keys

- In React, rendering lists using .map() is common.
- **Keys** help React identify which items have changed, are added, or are removed.
- Keys must be **unique among siblings**, and they should be **stable** (not generated randomly on each render).

```jsx
const numbers = [1, 2, 3, 4];
const listItems = numbers.map((num) => <li key={num}>{num}</li>);
```

> ❌ Avoid using index as key if list order can change.  
> ✅ Use a unique ID from the data if available.

## 📝 2. Conditional Rendering

React supports conditional rendering using:

- **Ternary operators**
- **Logical && operators**
- **Early returns / Render functions**

```jsx
{
  show ? <div>Hello</div> : <div>Nothing</div>;
}
{
  isLoggedIn && <Profile />;
}
const renderContent = () => {
  if (loading) return <Spinner />;
  if (error) return <Error />;
  return <Data />;
};
return <>{renderContent()}</>;
```

## 📝 3. State vs Refs

| Feature          | State                    | Ref (\`useRef\`)                                           |
| ---------------- | ------------------------ | ---------------------------------------------------------- |
| Causes re-render | ✅ Yes                   | ❌ No                                                      |
| Use case         | UI changes, tracked data | DOM manipulation, storing mutable values without re-render |
| Example          | Form inputs, toggles     | Accessing input elements, storing timers                   |

```jsx
const [count, setCount] = useState(0);
const inputRef = useRef(null);
```

## 📝 4. Why Not Use Direct Variables?

- Direct variables **reset on every render** → their value does not persist.
- React doesn't track them, so **UI won't update**.
- Always use \`state\` or \`refs\` for persistent values.

```jsx
let count = 0; // ❌ will reset each render
function increment() {
  count++;
  console.log(count); // won't trigger re-render
}
```

## 📝 5. How Re-render Works in React

- **When state changes**, React schedules a re-render of the component.
- Virtual DOM is compared to the previous render → React applies minimal DOM changes.
- Refs changing do **not** cause re-renders.

## 📝 6. Lifecycle Methods in React (Class vs Function)

| Lifecycle Stage      | Class Component      | Function Component Equivalent  |
| -------------------- | -------------------- | ------------------------------ |
| Mount (first render) | componentDidMount    | useEffect(() => {}, [])        |
| Update               | componentDidUpdate   | useEffect(() => {...}, [deps]) |
| Unmount (cleanup)    | componentWillUnmount | Cleanup return in useEffect    |

```jsx
useEffect(() => {
  console.log("Mounted");
  return () => {
    console.log("Unmounted");
  };
}, []);
```

# 🧠 Assignments

## 🟢 Easy Level

1. Create a list of fruits and render them using .map() with **unique keys**.
2. Toggle the list’s visibility using **conditional rendering** and a button.
3. Create a state variable for a count and display it in the UI.

## 🟡 Medium Level

1. Create a component that renders a list of students. Add a button to **add a new student** dynamically and verify that keys are working properly.
2. Create a component that uses both **state** and **ref**. Use state for a counter and ref to focus an input when a button is clicked.
3. Show a message "Component Mounted" using `useEffect` and log "Unmounted" when the component is removed.

## 🔴 Semi-Hard Level

1. Build a small todo list:
   - Use .map() to render todo items with unique IDs.
   - Allow adding/removing todos.
   - Use **conditional rendering** to show a “No Todos” message when empty.
2. Create a component that has:
   - A state counter
   - A ref timer ID
   - Start/stop timer functionality using ref (so timer doesn’t cause re-renders).
3. Replicate `componentDidMount` and `componentWillUnmount` behaviors using useEffect to log to the console and clean up resources.

## ⏱️ Bonus Assignment — Create a Timer

Create a **Timer component** with:

- Start, Pause, and Reset buttons
- Timer value should be stored in state
- setInterval ID should be stored in a ref
- Use useEffect for cleanup on unmount

```jsx
useEffect(() => {
  return () => clearInterval(timerRef.current);
}, []);
```

✅ Tip: Focus on understanding _when and why_ a component re-renders. Proper use of keys, state, and useEffect improves performance and clarity.
