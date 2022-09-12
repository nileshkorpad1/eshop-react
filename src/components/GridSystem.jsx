import {Container, Row, Col} from 'react-bootstrap'
import React from 'react'

export default function GridSystem({colCount, children, md}) {
    const rowCount = Math.floor(children.length / colCount) + 1;
    let index = 0;

    const buildGrid = () => {
        return(
            renderRows()
        );
    }

    const renderRows = () => {
        let rows = [];

        for (let row = 0; row < rowCount; row++) {
            rows.push(
                <Row className={"mt-4"} key={row}>
                    {
                        renderCols()
                    }
                </Row>
            )
        }
        return rows;
    }

    const renderCols = () => {
        let cols = [];

        for (let col = 0; col < colCount; col++) {
            if(index < children.length) {
                cols.push(
                    <Col md={colCount+1} sm={12} key={col}>
                        {children[index]}
                    </Col>
                )
                index++;
            }
        }

        return cols;
    }
    return (
        <Container className='grid-container'>
            {
                buildGrid()
            }
        </Container>
    );
}
