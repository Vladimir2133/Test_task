import React, { useState, useEffect } from 'react';
import {UserCard}  from '../components/users/UserCard';
import {connect} from 'react-redux'
import { usersFetchData } from '../redux/actions/users';


const MainContainer = (props) => {
    const [visible, setVisible] = useState(6)
    const [count, setCount] = useState(9)
    const [disabled, setDisabled] = useState(false)
    let timeRegistration = []
 
    useEffect(()=>{
        getUsers();
    }, [])

    const getUsers = () =>{
        props.fetchData('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count='+count)
        
    }
  
    const showMore = () =>{
        if(props.users.total_pages >= 2){
            setVisible(prevValue => prevValue + 3 )
            setCount(prev => prev+3, getUsers())
        }else{
            setDisabled(true)
        }
    }
    const users = props.users.users
    return(
        <>  
            <div className='cards-box'>
                {users?.slice(0, visible).map(user => {    
                    timeRegistration.push(user.registration_timestamp)
                    timeRegistration.sort((a,b)=>{return a-b})
                    
                    for(let i=0;i<timeRegistration.length;i++){
                        if(timeRegistration[i]==user.registration_timestamp)
                        return(
                            <UserCard
                                key={user.id} 
                                id={user.email}
                                name={user.name}
                                position={user.position} 
                                email={user.email}
                                phone={user.phone}
                                avatar={user.photo}  
                            />
                        )
                }
                    })}
                </div>
                <button className={disabled ?'disable_btn':'showMore_btn'} onClick={showMore}>
                    Show more
                </button> 
        </>
    )
}


const mapStateToProps = state => {
    return {
        users: state.users,
        counter:state.count
    }
;}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(usersFetchData(url)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
