export const JStoJSX = () => {
    let custom = "temp";
    let list = ["bat","ball","stump"];
  return (
    <div>
        <>
        <h1 className='jsToJsx'>Js to JSX working</h1>
        <p className='passage'> Checking in babel</p>
        
        <p className={custom} style={{fontSize: '25px'}}>Cheking style one</p>
        <ol>{list.map((item)=>(<li>{item}</li>))}</ol>
        <ul>{list.map((item)=>(<li>{item}</li>))}</ul>
        </>
    </div>
  )
}