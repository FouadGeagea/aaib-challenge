import React, { useCallback, useState } from 'react';
import mock from '../../../mock/mock.json';
import Cards from '../card/Cards';
import './Card.scss';
import classNames from 'classnames';

const Card = () => {
    const spamTicket = mock.elements;

    const [blockedTickets, setBlockedTickets] = useState([]);
    const [resolvedTickets, setResolvedTickets] = useState([]);

    const onTicketBlock = useCallback(
        (id) => () => {
            let tempBlockedTickets = [...blockedTickets];
            if (tempBlockedTickets.some((val) => val === id)) {
                tempBlockedTickets = tempBlockedTickets.filter((val) => val !== id);
            } else {
                tempBlockedTickets.push(id);
            }
            setBlockedTickets(tempBlockedTickets);
        },
        [blockedTickets]
    );

    const onTicketResolve = useCallback(
        (id) => () => {
            let tempResolvedTickets = [...resolvedTickets];
            if (tempResolvedTickets.some((val) => val === id)) {
                tempResolvedTickets = tempResolvedTickets.filter((val) => val !== id);
            } else {
                tempResolvedTickets.push(id);
            }
            setResolvedTickets(tempResolvedTickets);
        },
        [resolvedTickets]
    );

    return spamTicket.map(({ state, payload, id }, indx) => {
        return (
            !resolvedTickets.includes(payload.id) && (
                <div
                    key={id}
                    className={classNames('card', {
                        lastCard: spamTicket.length - 1 === indx
                    })}>
                    <Cards
                        isBlocked={blockedTickets.includes(payload.id)}
                        state={state}
                        payload={payload}
                        onTicketBlock={onTicketBlock}
                        onTicketResolve={onTicketResolve}
                    />
                </div>
            )
        );
    });
};

export default Card;
