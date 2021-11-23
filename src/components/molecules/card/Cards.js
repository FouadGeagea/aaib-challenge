import React from 'react';
import './Cards.scss';
import PropTypes from 'prop-types';
import AppText from '../../atoms/appText/AppText';
import AppButton from '../../atoms/appButton/AppButton';

const Cards = ({ state, payload, onTicketBlock, onTicketResolve, isBlocked }) => {
    const { reportId, reportType, message, id } = payload ?? {};

    return (
        <div className="cards">
            <div className="reportId">
                <div>
                    <AppText>Id: {reportId}</AppText>
                </div>
                <AppText>State: {state}</AppText>
            </div>
            <div className="reportId">
                <div>
                    <AppText>Type: {reportType}</AppText>
                </div>
                {message && <AppText>Message: {message}</AppText>}
            </div>
            <div className="buttonsContainer">
                <div className="buttons">
                    <AppButton className="button" onClick={onTicketBlock(id)}>
                        {isBlocked ? 'Unblock' : 'Block'}
                    </AppButton>
                </div>
                <div className="buttons">
                    <AppButton className="button" onClick={onTicketResolve(id)}>
                        Resolve
                    </AppButton>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    state: PropTypes.string.isRequired
};

export default Cards;
