import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(1000000).label("Price"),
    description: Yup.string().label("Description"),
    brand: Yup.object().required().nullable().label("Brand")
});

const brands = [
    {label: "Audi", value: 1},
    {label: "BMW", value: 2},
    {label: "Honda", value: 3},
    {label: "Huyndai", value: 4},
];

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={{title: "", price: "", description: "", brand: null}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" />
                <AppFormPicker items={brands} name="brands" placeholder="Brands" />
                <AppFormField maxLength={255} multiline name="description" numberOflines={3} placeholder="Description" />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ListingEditScreen;