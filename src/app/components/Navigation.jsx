import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = () => (
    <div>
        <Link>
            <h1>
                Navigation.jsx
            </h1>
        </Link>
    </div>
)

export const ConnectedNavigation = connect(state=>state) (Navigation);