function FirstComponent(props) {

  return (
    <div className="modal">
      <h1>{props.owner} Application</h1>
      <p>Demo application</p>
      <button onClick={props.closeModal}>Close</button>
    </div>
  );
}
export default FirstComponent;