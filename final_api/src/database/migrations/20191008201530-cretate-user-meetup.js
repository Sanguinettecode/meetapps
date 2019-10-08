module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('registrations', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdata: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      meetup_id: {
        type: Sequelize.INTEGER,
        references: { model: 'meetups', key: 'id' },
        onUpdata: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('registrations');
  },
};
