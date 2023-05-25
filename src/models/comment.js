module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      message: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  );
  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    Comment.belongsTo(models.Post, {
      foreignKey: {
        name: "postId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };
  return Comment;
};
