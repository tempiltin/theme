import React, { Fragment, useState } from 'react';
import { Card, CardHeader, CardBody, Button, Collapse } from 'reactstrap'

export const AllCloseAccordian = (props) => {
  const [isOpen, setIsOpen] = useState(0);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link' color='default' onClick={() => toggle(1)}  >
              Collapsible Group Item #<span className="digits">1</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 1}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link' color='default' onClick={() => toggle(2)}  >
              Collapsible Group Item #<span className="digits">2</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 2}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link' color='default' onClick={() => toggle(3)}  >
              Collapsible Group Item #<span className="digits">3</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 3}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link' color='default' onClick={() => toggle(4)}  >
              Collapsible Group Item #<span className="digits">4</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 4}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link' color='default' onClick={() => toggle(5)}  >
              Collapsible Group Item #<span className="digits">5</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 5}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
    </Fragment>

  );
}

export const PrimaryColorAccordian = (props) => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Fragment>
      <Card>
        <CardHeader className="bg-primary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='primary' onClick={() => toggle(1)}  >
              Collapsible Group Item #<span className="digits">1</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 1}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
      <Card>
        <CardHeader className="bg-primary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='primary' onClick={() => toggle(2)}  >
              Collapsible Group Item #<span className="digits">2</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 2}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
      <Card>
        <CardHeader className="bg-primary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='primary' onClick={() => toggle(3)}  >
              Collapsible Group Item #<span className="digits">3</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 3}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
    </Fragment>

  );
}

export const SecondaryColorAccordian = (props) => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Fragment>
      <Card>
        <CardHeader className="bg-secondary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='secondary' onClick={() => toggle(1)}  >
              Collapsible Group Item #<span className="digits">1</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 1}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
      <Card>
        <CardHeader className="bg-secondary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='secondary' onClick={() => toggle(2)}  >
              Collapsible Group Item #<span className="digits">2</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 2}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
      <Card>
        <CardHeader className="bg-secondary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='secondary' onClick={() => toggle(3)}  >
              Collapsible Group Item #<span className="digits">3</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 3}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
    </Fragment>

  );
}

export const AccordionWithIcon = (props) => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Fragment>
      <Card>
        <CardHeader className="bg-primary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='primary' onClick={() => toggle(1)}  ><i className="icofont icofont-briefcase-alt-2"></i>Collapsible Group Item #<span className="digits">1</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 1}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
      <Card>
        <CardHeader className="bg-primary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='primary' onClick={() => toggle(2)}  ><i className="icofont icofont-support"></i>Collapsible Group Item #<span className="digits">2</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 2}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
      <Card>
        <CardHeader className="bg-primary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='primary' onClick={() => toggle(3)}  ><i className="icofont icofont-tasks-alt"></i>Collapsible Group Item #<span className="digits">3</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 3}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
    </Fragment>
  );
}

export const AccordionWithOpenandCloseIcon = (props) => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Fragment>
      <Card>
        <CardHeader className="bg-primary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='primary' onClick={() => toggle(1)}  ><i className="icofont icofont-briefcase-alt-2"></i>Collapsible Group Item #<span className="digits">1</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 1}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
      <Card>
        <CardHeader className="bg-primary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='primary' onClick={() => toggle(2)}  ><i className="icofont icofont-support"></i>Collapsible Group Item #<span className="digits">2</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 2}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
      <Card>
        <CardHeader className="bg-primary">
          <h5 className="mb-0">
            <Button as={Card.Header} className='btn btn-link txt-white' color='primary' onClick={() => toggle(3)}  ><i className="icofont icofont-tasks-alt"></i>Collapsible Group Item #<span className="digits">3</span>
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen === 3}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </CardBody>
        </Collapse>
      </Card>
    </Fragment>
  );
}



