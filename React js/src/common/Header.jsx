function Header({Contact}) {
    
  return (
    <>
      <h1>Header Section</h1>
      <div className="nav">
        <div>{Contact.email}</div> &nbsp; | &nbsp;
        <div>{Contact.phone}</div>
      </div>
    </>
  )
}
export default Header;