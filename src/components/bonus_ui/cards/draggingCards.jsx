import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import Board, { moveCard } from '@asseinfo/react-kanban';

import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import { DragBothTitleCard, DragOnlyCard, DragOnlyContent } from "../../../constant";

const DraggingCards = () => {

    const board = {
        columns: [
            {
                id: 1,
                title: 'Basic card',
                cards: [
                    {
                        id: 1,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 2,
                title: 'Flat Card',
                cards: [
                    {
                        id: 2,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            }
        ]
    }
    const board1 = {
        columns: [
            {
                id: 3,
                title: 'Heading Card',
                cards: [
                    {
                        id: 3,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 4,
                title: 'Without Shadow',
                cards: [
                    {
                        id: 4,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
        ]
    }
    const board2 = {
        columns: [
            {
                id: 5,
                title: 'Card Sub-Title',
                cards: [
                    {
                        id: 5,
                        title: 'You can extend default collapse behaviour to create an accordion',
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 6,
                title: 'Card Sub-Title',
                cards: [
                    {
                        id: 6,
                        title: 'You can extend default collapse behaviour to create an accordion',
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            }
        ]
    }
    const [controlledBoard, setBoard] = useState(board);
    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }

    function ControlledBoard() {
        // You need to control the state yourself.
        const [controlledBoard, setBoard] = useState(board2);

        function handleCardMove(_card, source, destination) {
            const updatedBoard = moveCard(controlledBoard, source, destination);
            setBoard(updatedBoard);
        }

        return (
            <Board onCardDragEnd={handleCardMove} disableColumnDrag>
                {controlledBoard}
            </Board>
        );
    }

    return (
        <Fragment>
            <Breadcrumb parent="Bonus Ui" title="Draggable Cards" />
            <Container fluid={true}>
                <Row className="ui-sortable" >
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>
                                    {DragBothTitleCard}
                                </h5>
                            </CardHeader>
                            <CardBody className="draggable-card">
                                <Board initialBoard={board}>{board}</Board>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>
                                    {DragOnlyCard}
                                </h5>
                            </CardHeader>
                            <CardBody className="draggable-card">
                                <Board onCardDragEnd={handleCardMove}
                                    allowRemoveLane
                                    allowRenameColumn
                                    allowRemoveCard
                                    onLaneRemove={console.log}
                                    onCardRemove={console.log}
                                    onLaneRename={console.log}
                                    initialBoard={board}
                                    allowAddCard={{ on: "top" }}
                                    onNewCardConfirm={draftCard => ({
                                        id: new Date().getTime(),
                                        ...draftCard
                                    })}
                                    onCardNew={console.log}>{board1}</Board>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>
                                    {DragOnlyContent}
                                </h5>
                            </CardHeader>
                            <CardBody>
                                <ControlledBoard />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default DraggingCards;