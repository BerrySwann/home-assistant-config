"""
A collection of typing definitions for payloads

"""

from typing import Any, Mapping, NotRequired, TypedDict, Union

type MerossNamespaceType = str
type MerossMethodType = str
MerossHeaderType = TypedDict(
    "MerossHeaderType",
    {
        "messageId": str,
        "namespace": str,
        "method": str,
        "payloadVersion": int,
        "triggerSrc": NotRequired[str],
        "from": str,
        "uuid": NotRequired[str],
        "timestamp": int,
        "timestampMs": int,
        "sign": str,
    },
)


class _MerossPayloadType(TypedDict):
    pass


type MerossPayloadType = dict[str, Any]


class MerossMessageType(TypedDict):
    header: MerossHeaderType
    payload: MerossPayloadType


type MerossRequestType = tuple[MerossNamespaceType, MerossMethodType, MerossPayloadType]
type KeyType = Union[MerossHeaderType, str, None]


class ChannelPayload(TypedDict):
    """These payloads include a channel identifier and are typically included as a
    list payload in the specific ns payload message.
    i.e.
    {
        header: MerossHeaderType,
        payload: dict[str, list[ChannelPayload]] # where str is restricted to the ns.key
    }
    As an internal convention, inherited types (i.e. specific ns payloads)
    are coded with a _C suffix."""

    channel: Any


class HubIdPayload(TypedDict):
    id: str


class HubSubIdPayload(ChannelPayload):
    subId: str


class HistoryData(TypedDict):
    """
    A common struct usually appearing in a list of historical data points (LatestX, ConsumptionH).
    """

    value: int
    timestamp: int
