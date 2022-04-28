import React, { useState } from "react";
import { useFormik } from 'formik';
import { Paper,Box } from '@mui/material';
import * as Yup from "yup";
import Button from '../../Ui_components/TextField';
import TextField from '../../Ui_components/TextField';
import Select from '../../Ui_components/Select'
import { useAddHotels } from '../../../hooks/useAddTrip'
const validationSchema = Yup.object({
  TripName: Yup.string("Enter your TripName")
        .required("TripName is required"),
        ChargesPerPerson: Yup.string("Enter your ChargesPerPerson")
        .required("Please enter the ChargesPerPerson"),
        location: Yup.string("Enter your location")
        .required("Please enter the location"),
        image: Yup.string("Enter your image")
        .required("Please Select the image"),
        date: Yup.string("Enter date")
        .required("Date is required")
});

function Register() {
    const { handleHotels } = useAddHotels()
    const [image , setImage] = useState('')
    const formik = useFormik({
        initialValues: {
            TripName: '',
            ChargesPerPerson: '',
            location:'',
            image:'',
            date:''
        },
        validationSchema: validationSchema,
        onSubmit: async(values) => {
            handleHotels(values , image )
        },
    });
    return (
        <Box m="12rem auto" maxWidth="30%">
            <Paper elevation={6} >
                <form onSubmit={formik.handleSubmit} 
                style={{display:"flex" ,flexDirection:"column" ,justifyContent:'space-around',padding:"1rem"}}>
                    <TextField
                    sx={{marginTop:"1rem"}}
                        id="TripName"
                        name="TripName"
                        label="TripName"
                        type="text"
                        value={formik.values.TripName}
                        onChange={formik.handleChange}
                        error={formik.touched.TripName && Boolean(formik.errors.TripName)}
                        helperText={formik.touched.TripName && formik.errors.TripName}
                    />
                    <TextField
                     sx={{marginTop:"1rem"}}
                        id="ChargesPerPerson"
                        name="ChargesPerPerson"
                        label="ChargesPerPerson"
                        type="number"
                        value={formik.values.ChargesPerPerson}
                        onChange={formik.handleChange}
                        error={formik.touched.ChargesPerPerson && Boolean(formik.errors.ChargesPerPerson)}
                        helperText={formik.touched.ChargesPerPerson && formik.errors.ChargesPerPerson}
                    />
                       <TextField
                        sx={{marginTop:"1rem"}}
                        id="address"
                        name="address"
                        label="address"
                        type="text"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                    />
                     <TextField
                        sx={{marginTop:"1rem"}}
                        id="image"
                        name="image"
                        label="image"
                        type="file"
                        value={formik.values.image}
                        onChange={(e)=> {
                            formik.handleChange(e)
                            setImage(e.target.files[0])
                        }                      }
                        error={formik.touched.image && Boolean(formik.errors.image)}
                        helperText={formik.touched.image && formik.errors.image}
                    />
                     <TextField
                        sx={{marginTop:"1rem"}}
                        id="date"
                        name="date"
                        label="date"
                        type="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        helperText={formik.touched.date && formik.errors.date}
                    />
                    <Select
                    value={formik.values.location}
                    handleChange={(e)=> formik.setFieldValue('location' , e.target.value)}
                    // error={formik.touched.location}
                    sx={{marginTop:"1rem"}}
                    label='Select District'
                    id='location'
                    name='location'
                    items={['Hunza','Sikardu','Gilgit','Gaizer','Chilas',]}
                    />
                    <Button
                        sx={{marginTop:"1rem",backGroundColor:"#637bfd"}}
                        variant='filled'
                        type="submit"
                        title={'Submit'}
                        onClick={formik.handleSubmit}
                        disabled={!formik.isValid}
                    />
                </form>
            </Paper>
        </Box>
    );
}
export default Register;
