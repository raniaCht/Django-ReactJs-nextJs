import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verify } from '../../../actions/auth';
import { useRouter } from 'next/router'

const Activate = () => {
    const [verified, setVerified] = useState(false);

    const dispatch = useDispatch()
    const router = useRouter()

    const verify_account = e => {
        const { uid, token } = router.query

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(verify(uid, token))

        setVerified(true);
    };

    if (verified) {
        router.push('/login')
    }

    return (
        <div className='container'>
            <div
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>Verify your Account:</h1>
                <button
                    onClick={e => verify_account(e)}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default Activate;