import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: auto;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 54px;
    padding-block: 1rem;

    .redborder {
        border: 1px solid red !important;
    }
    button:disabled {
        opacity: 0.7;
    }

    .radioContainer {
        display: flex;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 15px;
        user-select: none;
        padding: 0.75rem;
        color: #1C2B33;
        font-weight: 500;
        justify-content: space-between;
        align-items: center;
    }

    .radioContainer input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        height: 22px;
        width: 22px;
        background-color: #fff;
        border-radius: 50%;
        display: grid;
        place-items: center;
        box-sizing: border-box;
    }

    .radioContainer:hover {
        background-color: #cccccc50;
    }

    .radioContainer input:checked ~ .checkmark {
        background-color: #2196f3;
    }

    .checkmark:after {
        content: "";
        display: none;
    }

    .radioContainer input:checked ~ .checkmark:after {
        display: block;
    }

    .radioContainer .checkmark:after {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        box-sizing: content-box;
        border: 3px solid #fff;
    }
`
const Container = styled.div`
    max-width: 700px;
    margin: auto;
    width: calc(100% - 2rem);
`

const Title = styled.div`
    font-weight: 700;
    color: #1C2B33;
    font-size: 24px;
`

const Btn = styled.button`
    background-color: #0064e0;
    border: 1px solid #0064e0;
    width: 100%;
    color: white;
    font-size: 13px;
    font-weight: 500;
    padding: 14px 20px;
    border-radius: 50px;
    text-transform: none;
    line-height: 1;
`

function Form({ setStep }) {
    return (
        <Container>
            <div className='pt-4 pt-md-0'>
                <Title>
                    Nike Marketing
                </Title>
            </div>
            <div className='pt-2' style={{ color: '#1C2B33', fontSize: '16px', lineHeight: 1.3, fontWeight: 600 }}>
                We are happy to have you in our Marketing Team.
            </div>

            <Wrapper>
                <label className="radioContainer">
                    Apply for our open Marketing Position
                    <input type="radio" name="radio" />
                    <div className="checkmark"></div>
                </label>
                <label className="radioContainer">
                    Schedule a call with us for more information
                    <input type="radio" name="radio" />
                    <div className="checkmark"></div>
                </label>
                <div className="text-end">
                    <Btn onClick={() => { setStep(2) }}>
                        Continue
                    </Btn>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Form
