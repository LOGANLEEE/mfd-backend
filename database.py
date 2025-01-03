from sqlmodel import Field, Session, SQLModel, create_engine

# Database configuration
sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


# Dependency for database sessions
def get_session():
    with Session(engine) as session:
        yield session


# class


class HeroBase(SQLModel):
    name: str = Field(index=True)
    age: int | None = Field(default=None, index=True)


class HeroTest(SQLModel):
    name: str = Field(index=True)
    age: int | None = Field(default=None, index=True)


class Hero(HeroBase, HeroTest, table=True):
    id: int | None = Field(default=None, primary_key=True)
    secret_name: str
