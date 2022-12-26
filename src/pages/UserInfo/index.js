import React from 'react'
import PageWrapper from '../../components/GlobalComponents/PageWrapper';
import TextBox from '../../components/GlobalComponents/TextBox';
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice';


function UserInfo() {
    const user = useSelector(selectUser)

    return (
        <PageWrapper>
            <TextBox title="My Information"
                text={
                    <>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </>
                }
            />
        </PageWrapper>
    )
}

export default UserInfo