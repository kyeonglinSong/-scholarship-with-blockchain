/*
SPDX-License-Identifier: Apache-2.0
*/

package kr.ac.becaforschool.domain.hyperledger.ledgerapi;

@FunctionalInterface
public interface StateDeserializer {
    State deserialize(byte[] buffer);
}
