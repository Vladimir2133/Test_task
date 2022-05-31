import * as axios from 'axios';
import React,{useEffect, useState} from 'react';
//form
import { TextField } from '@mui/material';
import validator from '../../utils/validators/validators'
import { useForm } from 'react-hook-form';
//redux
import { connect } from 'react-redux';
import {positionsFetchData} from '../../redux/actions/positions'
//style
import './styleForm.css'
//component
import { RegisteredSucc } from '../registeredSucc/RegisteredSucc';

const Form = props => {
    const {register, handleSubmit, formState:{errors,isValid}, reset} = useForm()
    const [loading, setLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState('Upload your photo')

    //add user
    const onSubmit = handleSubmit(async ({name,email,phone,position}) => {
        try{
            const tokenResult = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            const formData = new FormData();
                formData.append('name',name)
                formData.append('email',email)
                formData.append('phone',phone)
                formData.append('position_id',+position)
                formData.append('photo',selectedFile)

            const response = await axios({
                method: 'post',
                url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
                data: formData,
                headers: {
                    Token: tokenResult.data.token,
                    "Content-Type": "multipart/form-data"
                },
            })
            if (response.data.success) {
                return response.data.message, 
                setLoading(true),
                reset();
            }
        }catch(error){
            console.log('API addUser error: ', error);
            return error.message;
        }
        
    })
        
    useEffect(()=>{
        props.fetchData('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    }, [])
    
    // get name file
    const changeName = event => setSelectedFile(event.target.files[0])

    return(
        <>  
            {loading ? <RegisteredSucc /> :
                <form className='form'>
                    <h2 className='main_title'>Working with POST request</h2>
                    <div className='inputs_box'>
                        <div className='textInputs_box'>
                            <TextField 
                                className='input' 
                                id="outlined-basic"
                                type='text' 
                                label="Your name" 
                                variant="outlined"
                                helperText='User name, should be 2-60 characters'
                                inputProps={{style:{'color':'#7E7E7E'}}}
                                {...register('name',require, {
                                    ...validator.name,
                                })}  
                            />
                            <TextField 
                                className='input' 
                                id="outlined-basic"
                                type='email' 
                                label="Email" 
                                variant="outlined"
                                {...register('email',require, {...validator.email})}
                            />
                            <TextField 
                                className='input' 
                                id="outlined-basic" 
                                type='phone'
                                label="Phone" 
                                variant="outlined"
                                helperText='+38 (XXX) XXX - XX - XX' 
                                {...register('phone', require,{...validator.phone})}
                            />
                        </div>
                        <div className='radioInputs_box'> 
                            {props.positions?.map(({name,id}, index) => {
                                return(
                                    <label key={index} className='radio' htmlFor={id}>
                                        <input className='radio_input' type="radio" id={id}
                                            name='positions' value={id} {...register('position',{...validator.position})}  />
                                            <div className='radio_radio'></div>
                                            {name}
                                    </label>
                                )
                            })}
                        </div>
                        <label className='file'  htmlFor='file_input' >
                            <input {...register('photo')} id='file_input' type='file' onChange={changeName} />
                            <p className="text">{selectedFile && selectedFile.name||'Upload your photo'}</p>
                        </label>         
                    </div>
                    <button 
                        onClick={onSubmit}              
                        type='submit'
                        className={'showMore_btn'}>
                        Sign up
                    </button>        
                </form>  
            }                
        </>     
    )
}


const mapStateToProps = state => {return {
        positions: state.positions.positions,
        users: state.users
    };}

const mapDispatchToProps = dispatch => {
    return {fetchData: url => dispatch(positionsFetchData(url))};
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
