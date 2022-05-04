"""
Module defining AbstractCalculator.

This is needed to avoid circular dependencies between
modules for Calculator and Future.
"""
# Standard library
import abc
import typing

# Glow
from glow.types.type import Type


class AbstractCalculator(abc.ABC):
    def __init__(self) -> None:
        # Simply typing attributes
        self.__name__: str

    @abc.abstractmethod
    def calculate(self, **kwargs) -> typing.Any:
        pass

    @abc.abstractmethod
    def cast_inputs(
        self, kwargs: typing.Dict[str, typing.Any]
    ) -> typing.Dict[str, typing.Any]:
        pass

    @abc.abstractmethod
    def cast_output(self, value: typing.Any) -> typing.Any:
        pass

    @abc.abstractproperty
    def input_types(self) -> typing.Dict[str, typing.Type[Type]]:
        pass

    @abc.abstractproperty
    def output_type(self) -> typing.Type[Type]:
        pass
