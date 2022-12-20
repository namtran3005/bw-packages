import React from 'react';
import { render, screen, userEvent } from 'test-utils';
import { Modal } from './Modal';

test('modal shows the children and a close button', () => {
  // Arrange
  const handleClose = jest.fn();

  // Act
  render(
    <main>
      <Modal onClose={handleClose} open>
        <div>test</div>
      </Modal>
    </main>
  );

  // Act
  userEvent.click(screen.getByLabelText(/Close/i));

  // Assert
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test('that closed to open state works', async () => {
  const handleClose = jest.fn();

  const TestModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <main>
        <button onClick={() => setIsOpen(true)}>see more...</button>
        <Modal title="awsomeness" onClose={handleClose} open={isOpen}>
          <div>test</div>
        </Modal>
      </main>
    );
  };

  render(<TestModal />);

  userEvent.click(screen.getByRole('button'));

  const secondRender = await screen.findByRole('dialog');

  expect(secondRender).toBeInTheDocument();

  expect(screen.getByLabelText('awsomeness')).toBeInTheDocument();
});
